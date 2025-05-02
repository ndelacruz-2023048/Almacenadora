import ProductMovementHistory from './productMovementHistory.model.js'

//Agregar Product Movement History
export const saveProductMovementHistory = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let product = new ProductMovementHistory(data)
        await product.save();
        return res.status(200).send({message: 'Product Movement History added successfully'})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error adding Product Movement History', error})
    }
}

//Agregar out
export const saveOutProductMovementHistory = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        let product = new ProductMovementHistory(data)
        await product.save();
        return res.status(200).send({message: 'Product Movement History added successfully'})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error adding Product Movement History', error})
    }
}


export const topProductMovement = async(req,res)=>{
    try {
        const result = await ProductMovementHistory.aggregate([
            {
                $group: {
                  _id: "$productId",
                  totalMovements: { $sum: 1 }
                }
              },
              {
                $lookup: {
                  from: "products", // Nombre de la colección según el modelo
                  localField: "_id", // Campo _id del resultado de $group (productId)
                  foreignField: "_id", // Campo _id en la colección Product
                  as: "product" // Arreglo donde se almacenan los documentos unidos
                }
              },
              {
                $unwind: {
                  path: "$product", // Descompone el arreglo product
                  preserveNullAndEmptyArrays: true // Mantiene documentos sin coincidencia
                }
              },
              {
                $project: {
                  _id: "$_id",
                  totalMovements: 1,
                  name: "$product.productName" // Extrae el campo productName
                }
              },
              {
                $sort: { totalMovements: -1 } // Ordena de mayor a menor
              }
          ])

        return res.status(200).send({message: 'Product Movement History get successfully',result})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting Product Movement History', error})
    }
}

export const getLast5DaysEntriesAndOutProducts = async(req, res) => {
  try {
    const today = new Date();
        const fiveDaysAgo = new Date(today);
        fiveDaysAgo.setDate(today.getDate() - 5);

        const result = await ProductMovementHistory.aggregate([
            {
                $match: {
                    movementDate: {
                        $gte: fiveDaysAgo,
                        $lte: today
                    }
                }
            },
            {
                $group: {
                    _id: {
                        fecha: { $dateToString: { format: "%Y-%m-%d", date: "$movementDate" } },
                        tipo: "$movementType"
                    },
                    total: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.fecha",
                    datos: {
                        $push: {
                            tipo: "$_id.tipo",
                            total: "$total"
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: "$_id",
                    entradas: {
                        $ifNull: [{
                            $first: {
                                $map: {
                                    input: {
                                        $filter: {
                                            input: "$datos",
                                            as: "item",
                                            cond: { $eq: ["$$item.tipo", "Entrada"] } // Cambiado a "Entrada"
                                        }
                                    },
                                    as: "filtered",
                                    in: "$$filtered.total"
                                }
                            }
                        }, 0]
                    },
                    salidas: {
                        $ifNull: [{
                            $first: {
                                $map: {
                                    input: {
                                        $filter: {
                                            input: "$datos",
                                            as: "item",
                                            cond: { $eq: ["$$item.tipo", "Salida"] } // Cambiado a "Salida"
                                        }
                                    },
                                    as: "filtered",
                                    in: "$$filtered.total"
                                }
                            }
                        }, 0]
                    }
                }
            },
            {
                $sort: { name: 1 }
            }
        ]);

    // Si no hay datos, generar fechas vacías
    if (result.length === 0) {
        const emptyDates = [];
        for (let i = 0; i < 5; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            emptyDates.unshift({
                name: date.toISOString().split('T')[0],
                entradas: 0,
                salidas: 0
            });
        }
        return res.status(200).send({
            message: 'No movements found in the last 5 days',
            result: emptyDates
        });
    }

    return res.status(200).send({
        message: 'Movements retrieved successfully',
        result
    });
  } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Error getting last 5 days entries', error });
  }
}
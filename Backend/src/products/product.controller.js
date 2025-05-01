import Product from './product.model.js'

//Agregar Producto
export const saveProduct = async (req, res) => {
    try {
        let data = req.body;
        console.log(data.productDate);
        
        let product = new Product(data)
        await product.save();
        return res.status(201).send({message: 'Client added successfully'})
    } catch (error) {
        console.error(error) 
        return res.status(500).send({message: 'Error adding client', error})
    }
}

export const getProductByName = async(req,res)=>{
    try {
        const {productName} = req.query
        
        
        const product = await Product.find({productName:productName})
       
        
        return res.status(200).send({success:true,message:product})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error finding client', error})
    }
}

export const getProducts = async(req,res)=>{
    try {
        const product = await Product.find()
        return res.status(200).send({success:true,message:product})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error finding client', error})
    }
}

/**Invetariado */

export const addProductStock = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del producto desde los parámetros
        const { quantity } = req.body; // Obtener la cantidad desde el cuerpo de la solicitud

        // Validar que la cantidad sea un número positivo
        if (typeof quantity !== 'number' || quantity <= 0) {
            return res.status(400).send({ message: 'Quantity must be a positive number' });
        }

        // Buscar el producto por ID
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Incrementar el stock
        product.productStock += quantity;

        // Guardar los cambios
        await product.save();
        return res.status(200).send({ message: 'Stock added successfully', product });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error adding stock', error });
    }
};

export const subtractProductStock = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del producto desde los parámetros
        const { quantity } = req.body; // Obtener la cantidad desde el cuerpo de la solicitud

        // Validar que la cantidad sea un número positivo
        if (typeof quantity !== 'number' || quantity <= 0) {
            return res.status(400).send({ message: 'Quantity must be a positive number' });
        }

        // Buscar el producto por ID
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Decrementar el stock
        product.productStock -= quantity;

        // Validar que el stock no sea negativo
        if (product.productStock < 0) {
            return res.status(400).send({ message: 'Stock cannot be negative' });
        }

        // Guardar los cambios
        await product.save();
        return res.status(200).send({ message: 'Stock subtracted successfully', product });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error subtracting stock', error });
    }
};

export const getInventoryReportWithPrice = async (req, res) => {
    try {
        const products = await Product.find(); // Obtener todos los productos

        // Calcular el total de productos en stock y el valor total del inventario
        let totalStock = 0;
        let totalValue = 0;

        const report = products.map(product => {
            const productPrice = parseFloat(product.productPrice); // Convertir el precio a número
            const productValue = product.productStock * productPrice; // Calcular el valor total del producto

            totalStock += product.productStock;
            totalValue += productValue;

            return {
                productName: product.productName,
                productStock: product.productStock,
                productPrice,
                totalValue: productValue,
            };
        });

        return res.status(200).send({
            success: true,
            message: 'Inventory report with price generated successfully',
            data: {
                report,
                totalStock,
                totalValue,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error generating inventory report with price', error });
    }
};

export const getInventoryMovementsWithPrice = async (req, res) => {
    try {
        const { startDate, endDate } = req.query; // Fechas proporcionadas en la solicitud

        // Validar que las fechas sean válidas
        if (!startDate || !endDate) {
            return res.status(400).send({ message: 'Start date and end date are required' });
        }

        const movements = await InventoryMovement.find({
            date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        }).populate('productId'); // Asegúrate de popular el producto para obtener su precio

        // Resumir las entradas y salidas con precios
        const summary = movements.reduce(
            (acc, movement) => {
                const productPrice = parseFloat(movement.productId.productPrice); // Precio del producto
                const movementValue = movement.quantity * productPrice; // Valor del movimiento

                if (movement.type === 'entry') {
                    acc.totalEntries += movement.quantity;
                    acc.totalEntryValue += movementValue;
                } else if (movement.type === 'exit') {
                    acc.totalExits += movement.quantity;
                    acc.totalExitValue += movementValue;
                }
                return acc;
            },
            { totalEntries: 0, totalExits: 0, totalEntryValue: 0, totalExitValue: 0 }
        );

        return res.status(200).send({
            success: true,
            message: 'Inventory movements report with price generated successfully',
            data: {
                movements,
                summary,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error generating inventory movements report with price', error });
    }
};
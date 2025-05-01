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

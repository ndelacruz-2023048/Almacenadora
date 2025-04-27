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
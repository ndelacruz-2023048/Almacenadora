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

export const updateProductStock = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del producto desde los parámetros
        const { quantity } = req.body; // Obtener la cantidad desde el cuerpo de la solicitud

        // Validar que la cantidad sea un número
        if (typeof quantity !== 'number') {
            return res.status(400).send({ message: 'Quantity must be a number' });
        }

        // Buscar el producto por ID
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        // Actualizar el stock
        product.productStock += quantity;

        // Validar que el stock no sea negativo
        if (product.productStock < 0) {
            return res.status(400).send({ message: 'Stock cannot be negative' });
        }

        // Guardar los cambios
        await product.save();
        return res.status(200).send({ message: 'Stock updated successfully', product });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error updating stock', error });
    }
};
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
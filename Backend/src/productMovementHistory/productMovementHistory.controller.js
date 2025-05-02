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

export const getProductMovementHistory = async(req,res)=>{
    try{
        const history = await ProductMovementHistory.find()
        return res.status(200).send({success:true, message: history})
    }catch(err){
        console.log(err)
        return res.status(500).send({message: 'Error finding Products History', err})
    }
}
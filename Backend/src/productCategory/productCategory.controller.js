import ProductCategoryModel from "./productCategory.model.js"
export const getProductsCategory = async (req, res) => {
    try {
        let clients = await ProductCategoryModel.find()
        return res.status(200).send({message: 'Clients retrieved successfully', clients})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error retrieving clients', error})
    }
}
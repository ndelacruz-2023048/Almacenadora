import ProductCategory from "./productCategory.model.js"
export const getProductsCategory = async (req, res) => {
    try {
        let categories = await ProductCategory.find()
        return res.status(200).send({message: 'Categories retrieved successfully', categories})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error retrieving categories', error})
    }
}

export const createProductsCategory = async (req, res) => {
    try {
        let data = req.body
        console.log(data.productCategory);
        let categories = new ProductCategory(data)
        await categories.save()
        return res.status(200).send({message: 'Created categorie succesfully', categories})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error retrieving categories', error})
    }
}
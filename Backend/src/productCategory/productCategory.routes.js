import { Router } from "express";

import { 
    getProductsCategory,
    createProductsCategory,
    getCategoryByName
} from "./productCategory.controller.js";

const productCategory = Router()

productCategory.get('/productCategory', getProductsCategory)
productCategory.post('/productCategoryCreated', createProductsCategory)
productCategory.get('/productCategory/search', getCategoryByName)

export default productCategory
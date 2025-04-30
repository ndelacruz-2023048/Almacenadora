import { Router } from "express";

import { 
    getProductsCategory,
    createProductsCategory
} from "./productCategory.controller.js";

const productCategory = Router()

productCategory.get('/productCategory', getProductsCategory)
productCategory.post('/productCategoryCreated', createProductsCategory)

export default productCategory
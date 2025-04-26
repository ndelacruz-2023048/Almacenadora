import { Router } from "express";

import { 
    getProductsCategory,
} from "./productCategory.controller.js";

const productCategory = Router()

productCategory.get('/productCategory', getProductsCategory)

export default productCategory
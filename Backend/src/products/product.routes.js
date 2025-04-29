import { Router } from "express";

import { 
    saveProduct,
    getProductByName
} from "./product.controller.js";

const product = Router()

product.get('/product/search', getProductByName)
product.post('/product', saveProduct)

export default product
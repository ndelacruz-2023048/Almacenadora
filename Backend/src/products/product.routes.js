import { Router } from "express";

import { 
    saveProduct,
    getAllProducts
} from "./product.controller.js";

const product = Router()

product.post('/product', saveProduct)
product.get('/product', getAllProducts)

export default product
import { Router } from "express";

import { 
    saveProduct,
    getProductByName,
    getProducts,
    getAllProducts
} from "./product.controller.js";

const product = Router()

product.get('/product/search', getProductByName)
product.post('/product', saveProduct)
product.get('/product', getAllProducts)
product.get('/product',getProducts)

export default product
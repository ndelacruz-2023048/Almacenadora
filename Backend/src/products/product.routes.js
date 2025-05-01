import { Router } from "express";

import { 
    saveProduct,
    getProductByName,
    getProducts,
    updateProductStock
} from "./product.controller.js";

const product = Router()

product.get('/product/search', getProductByName)
product.post('/product', saveProduct)
product.get('/product',getProducts)
product.put('/product/updateStock/:id', updateProductStock)

export default product
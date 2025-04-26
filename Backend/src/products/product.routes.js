import { Router } from "express";

import { 
    saveProduct,
} from "./product.controller.js";

const product = Router()

product.post('/product', saveProduct)

export default product
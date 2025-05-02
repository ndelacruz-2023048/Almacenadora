import { Router } from "express";

import { 
    saveProduct,
    getProductByName,
    getProducts,
    getInventoryReportWithPrice,
    getInventoryMovementsWithPrice,
    addProductStock,
    subtractProductStock,
    getProdutById
} from "./product.controller.js";

const product = Router()

product.post('/product', saveProduct)
product.get('/product/search', getProductByName)
product.get('/product',getProducts)
product.get('/product/inventoryReportWithPrice', getInventoryReportWithPrice);
product.get('/product/inventoryMovementsWithPrice', getInventoryMovementsWithPrice);
product.put('/product/addStock/:id', addProductStock);
product.put('/product/subtractStock/:id', subtractProductStock);
product.get('/product/:idProduct',getProdutById)

export default product
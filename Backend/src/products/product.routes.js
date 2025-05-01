import { Router } from "express";

import { 
    saveProduct,
    getProductByName,
    getProducts,
    updateProductStock,
    getInventoryReportWithPrice,
    getInventoryMovementsWithPrice,
    addProductStock,
    subtractProductStock
} from "./product.controller.js";

const product = Router()

product.post('/product', saveProduct)
product.get('/product/search', getProductByName)
product.get('/product',getProducts)
product.get('/product/inventoryReportWithPrice', getInventoryReportWithPrice);
product.get('/product/inventoryMovementsWithPrice', getInventoryMovementsWithPrice);
product.put('/product/updateStock/:id', updateProductStock)
product.put('/product/addStock/:id', addProductStock);
product.put('/product/subtractStock/:id', subtractProductStock);

export default product
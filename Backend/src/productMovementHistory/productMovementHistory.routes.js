import { Router } from "express";

import { 
    saveProductMovementHistory,
    saveOutProductMovementHistory,
    getProductMovementHistory,
    topProductMovement,
    getLast5DaysEntriesAndOutProducts
} from "./productMovementHistory.controller.js"

const productMovementHistory = Router()

productMovementHistory.post('/productmovehistory', saveProductMovementHistory)
productMovementHistory.post('/productmovehistoryout', saveOutProductMovementHistory)
productMovementHistory.get('/productmovehistory/topproductmovement', topProductMovement)
productMovementHistory.get('/productmovehistory/productmovementbydate', getLast5DaysEntriesAndOutProducts)
productMovementHistory.get('/getproductmovihistoty', getProductMovementHistory)

export default productMovementHistory
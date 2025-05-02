import { Router } from "express";

import { 
    saveProductMovementHistory,
    saveOutProductMovementHistory,
    getProductMovementHistory
} from "./productMovementHistory.controller.js"

const productMovementHistory = Router()

productMovementHistory.post('/productmovehistory', saveProductMovementHistory)
productMovementHistory.post('/productmovehistoryout', saveOutProductMovementHistory)
productMovementHistory.get('/getproductmovihistoty', getProductMovementHistory)

export default productMovementHistory
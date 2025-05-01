import { Router } from "express";

import { 
    saveProductMovementHistory,
    saveOutProductMovementHistory
} from "./productMovementHistory.controller.js"

const productMovementHistory = Router()

productMovementHistory.post('/productmovehistory', saveProductMovementHistory)
productMovementHistory.post('/productmovehistoryout', saveOutProductMovementHistory)

export default productMovementHistory
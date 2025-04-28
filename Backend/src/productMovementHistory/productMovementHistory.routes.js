import { Router } from "express";

import { 
    saveProductMovementHistory,
} from "./productMovementHistory.controller.js"

const productMovementHistory = Router()

productMovementHistory.post('/productmovehistory', saveProductMovementHistory)

export default productMovementHistory
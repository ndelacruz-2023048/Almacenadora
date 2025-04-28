import { Router } from "express";

import { 
    addProvider
} from "./provide.controller.js";

const provider = Router()

provider.post('/provider', addProvider)

export default provider
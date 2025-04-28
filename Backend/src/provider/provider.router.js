import { Router } from "express";

import { 
    addProvider
} from "./provide.controller.js";

const provider = Router()

provider.get('/provider', addProvider)

export default provider
import { Router } from "express";

import { 
    addProvider,
    getAllProviders
} from "./provide.controller.js";

const provider = Router()

provider.post('/provider', addProvider)
provider.get('/provider', getAllProviders)

export default provider
import { Router } from "express";

import { 
    addProvider,
    getProviders,
    getProvidersByName
} from "./provide.controller.js";

const provider = Router()

provider.post('/provider', addProvider)
provider.get('/provider', getProviders)
provider.get('/provider/search', getProvidersByName)

export default provider
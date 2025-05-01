import { Router } from "express";

import { 
    getClients,
    postClient,
    checkClientField
} from "./client.controller.js";

const client = Router()

client.post('/client', postClient)
client.get('/client', getClients)
client.get('/client/check', checkClientField)

export default client
import { Router } from "express";

import { 
    getClients,
    postClient,
    getClientByName
} from "./client.controller.js";

const client = Router()

client.post('/client', postClient)
client.get('/client', getClients)
client.get('/client/search', getClientByName)

export default client
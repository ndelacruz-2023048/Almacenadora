import { Router } from "express";

import { 
    getClients,
    postClient
} from "./client.controller.js";

const client = Router()

client.post('/client', postClient)
client.get('/client', getClients)

export default client
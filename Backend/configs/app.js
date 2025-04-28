`use strict`

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import client from "../src/client/client.routes.js"
import productCategory from "../src/productCategory/productCategory.routes.js"
import product from "../src/products/product.routes.js"
import provider from "../src/provider/provider.router.js"

const configs = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app) =>{
    app.use('/v1/api', client)
    app.use('/v1/api', productCategory)
    app.use('/v1/api', product)
    app.use('v1/api', provider)
}

export const initServer = ()=>{
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}
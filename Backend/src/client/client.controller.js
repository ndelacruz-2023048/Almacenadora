import Client from '../client/client.model.js'

//Agregar cliente
export const postClient = async (req, res) => {
    try {
        let data = req.body;
        let client = new Client(data)
        await client.save();
        return res.status(201).send({message: 'Client added successfully', client})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error adding client', error})
    }
}

//Obtener todos los clientes
export const getClients = async (req, res) => {
    try {
        let clients = await Client.find()
        return res.status(200).send({message: 'Clients retrieved successfully', clients})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error retrieving clients', error})
    }
}

export const getClientByName = async(req, res)=>{
    try{
        const {clientName} = req.query

        const client = await Client.find({clientName:clientName})
        return res.status(200).send({success:true, message:client})
    }catch(e){
        console.error(e)
        return res.status(500).send({message:'Error finding client', e})
    }
}
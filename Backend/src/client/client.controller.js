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

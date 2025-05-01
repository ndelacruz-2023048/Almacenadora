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

export const checkClientField = async (req, res) => {
    try {
      const query = req.query;
      // Solo permitir campos válidos
      const allowedFields = ['clientName', 'clientUsername', 'clientEmail', 'clientPhone'];
      const queryKeys = Object.keys(query);
  
      if (queryKeys.length !== 1 || !allowedFields.includes(queryKeys[0])){
        return res.status(400).send({ success: false, message: 'Invalid query parameter' });
      }
      const fieldName = queryKeys[0]
      const value = query[fieldName]
  
      const existing = await Client.findOne({ [fieldName]: value });
      return res.status(200).send({
        success: true,
        exists: !!existing,
        field: fieldName,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: 'Error checking client field', e });
    }
  };
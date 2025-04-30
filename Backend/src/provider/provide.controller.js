import Provider from "./provide.modell.js";

/*Agregar Provider*/
export const addProvider = async (req, res) => {
    try {
        console.log(req.body);
        const { name,date, departament, email, phone, address, description, image } = req.body;
        const newProvider = new Provider({ name,date, departament, email, phone, address, description, image });
        await newProvider.save();
        return res.status(200).send({ message: 'Provider created successfully', newProvider });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error creating provider', error });
    }
}
/*Obtener todos los Providers*/
export const getAllProviders = async (req, res) => {
    try {
        const { name } = req.query;
        const providers = await Provider.find({name: name});
        return res.status(200).send({ 
            success: true,
            message: 'Providers retrieved successfully', 
            providers 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ 
            message: 'Error retrieving providers', 
            error 
        });
    }
}
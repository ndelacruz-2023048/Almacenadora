import providerSchema from "./provide.modell.js";

/*Agregar Provider*/
export const addProvider = async (req, res) => {
    try {
        const { name, departament, email, phone, address, description, image } = req.body;
        const newProvider = new providerSchema({ name, departament, email, phone, address, description, image });
        await newProvider.save();
        return res.status(200).send({ message: 'Provider created successfully', newProvider });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error creating provider', error });
    }
}
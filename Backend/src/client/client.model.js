import { Schema, model } from "mongoose";
 
const clientSchema = Schema({
    clientName: {
        type: String,
        required: [true, 'Name is required'],
        minLength:[5, 'Name is too short'],
        maxLength: [100, 'Name is too long'],
        //unique: [true, 'Name is already taken']
    },
    clientUsername:{
        type: String,
        required: [true, 'Username is required'],
        minLength:[5, 'Name is too short'],
        maxLength:[100, 'Name is too long'],
        //unique: [true, 'Username is already in use'],
    },
    clientEmail:{
        type: String,
        required: [true, 'Email is required'],
        //unique: [true, 'Email is already in use']
    },
    clientPassword:{
        type: String,
        required: [true,'Password is required'],
        minLength: [8, 'Password must be at least 8 characters long'],
    },
    clientPhone:{
        type: String,
        required: [true, 'Phone is required'],
        minLength:[8,'Phono needs min 8 characters'],
        //unique: [true, 'Phone is already in use']
    },
    clientAddress:{
        type: String,
        required: [true, 'Address is required'],
    },
    uploadImage:{
        type:String,
        required:[true, "Imagen is required"]
    }
})
 
clientSchema.methods.toJSON = function(){
    const {__v, password, ...user} = this.toObject();
    return user;
}
 
export default model('Client', clientSchema);
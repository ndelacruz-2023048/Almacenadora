import { Schema, model } from "mongoose";

const productSchema = Schema({
    productName: {
        type: String,
        required: [true, 'Name Category is required'],
        maxLength: [50, 'Name Category is too long'],
        unique: [true, 'Name Category is already taken'] 
    },
    productDescription:{
        type: String,
        required: [true, 'Description Category is required'],
    },
    uploadImage:{
        type: String,
        required: [true, 'Image is required'],
    },
    productStock:{
        type: Number,
        required: [true, 'Description Category is required'],
    },
    productPrice:{
        type:Schema.Types.Decimal128,
        
    },
    productDate:{
        type: Date,
        required: [true, 'Description Category is required'],
    },
    productCategory:{
        type: Schema.Types.ObjectId,
        ref:"ProductCategory",
        required:[true,'Product Category is required']
    },
    productProvider:{
        type: String,
        required:[true,'Product Category is required']
    },/*Cambiar por un Objeect Id,  */

})

export default model('Product', productSchema);
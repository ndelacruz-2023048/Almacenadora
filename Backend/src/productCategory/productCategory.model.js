import { Schema, model } from "mongoose";

const productCategorySchema = Schema({
    nameCategory: {
        type: String,
        required: [true, 'Name Category is required'],
        maxLength: [50, 'Name Category is too long'],
        unique: [true, 'Name Category is already taken']
    },
    descriptionCategory:{
        type: String,
        required: [true, 'Description Category is required'],
        unique: [true, 'Description Category is already in use'],
    },
    image:{
        type: String,
        required: [true, 'Image is required'],
        unique: [true, 'Image is already in use']
    }
})

export default model('ProductCategory', productCategorySchema);
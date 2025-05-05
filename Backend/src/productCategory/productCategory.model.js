import { Schema, model } from "mongoose";

const productCategorySchema = Schema({
    nameCategory: {
        type: String,
        required: [true, 'Name Category is required'],
        maxLength: [50, 'Name Category is too long'],
    },
    descriptionCategory:{
        type: String,
        required: [true, 'Description Category is required'],
    },
    image:{
        type: String,
        required: [true, 'Image is required'],
    }
})

export default model('ProductCategory', productCategorySchema);
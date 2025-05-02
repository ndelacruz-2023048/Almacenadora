import { Schema, model } from "mongoose";

const productMovementHistory = Schema({
    movementDate: {
        type: Date,
        required: [true, 'Movement Date is required'],
    },
    movementType:{
        type: String,
        required: [true, 'Movement type is required'],
    },
    count:{
        type: Number,
        required: [true, 'Count is required'],
    },
    description:{
        type:String,
        required:[true,'Description movement is required']
    },
    productId:{
        type: Schema.Types.ObjectId,
        ref:"Product"
    }
    // },
    // userId:{
    //     type:Schema.Types.ObjectId,
    //     ref:""
    // }
})


export default model('ProductMovementHistory', productMovementHistory);
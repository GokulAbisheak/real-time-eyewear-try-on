import mongoose from "mongoose"

const PaymentSchema = new mongoose.Schema({

    products: [{
        name: String,
        price: Number,
        quantity: Number
    }],

    paymentType: {
        type: String,
        required: true
    },

    amount: {
        type:String,
        required: true
    },

    transactionDateTime:{
        type:String,
        required: true
    }

})


export default mongoose .model('Payment', PaymentSchema)
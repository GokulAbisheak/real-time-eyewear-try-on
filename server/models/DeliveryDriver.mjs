import mongoose from 'mongoose';

const DeliveryDriverSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email:{
        type:String,
        required: true
    },

    address: {
        type:String,
        required: true
    },

    NIC: {
        type:String,
        required: true
    },

    licenseNo: {
        type:String,
        required: true
    },

    vehicleNo: {
        type:String,
        required: true
    },

    password:{
        type: String,
        required: true
    }, 

    numberOfOrder: {
        type: String,
        required: true
    },

    lastModifiedDateTime: {
        type: String,
        required: true
    }

})


export default mongoose.model('DeliveryDriver', DeliveryDriverSchema);
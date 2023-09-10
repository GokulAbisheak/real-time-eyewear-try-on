import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  products: {
    type: mongoose.ObjectId,
    ref: "",
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  paymentType: {
    type: String,
    required: true,
  },

  cardNumber: {
    type: String,
    required: true,
  },

  amount: {
    type: String,
    required: true,
  },

  transactionDateTime: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Payment", PaymentSchema);

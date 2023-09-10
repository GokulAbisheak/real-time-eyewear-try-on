import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  feedback: {
    type: String,
    required: true,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Rating", ratingSchema);

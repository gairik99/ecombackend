const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  product: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const ProductCartSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number
});
const ProductCart =  mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],//when products are inside the cart then it has the different functionality so that we are writing inside  ProductCartSchema
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order =  mongoose.model("Order", orderSchema);

module.exports = {Order , ProductCart}

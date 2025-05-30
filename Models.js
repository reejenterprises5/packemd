const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  colors: [String],
  materials: [String],
  image: String
});

const OrderSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  size: String,
  color: String,
  material: String,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now }
});

const DesignSchema = new mongoose.Schema({
  filename: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = {
  Product: mongoose.model('Product', ProductSchema),
  Order: mongoose.model('Order', OrderSchema),
  Design: mongoose.model('Design', DesignSchema)
};

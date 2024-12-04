const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  attributes: [
    {
      key: String,
      value: String,
    },
  ],
  images: [{ type: String }],
  status: { type: String, enum: ['active', 'deleted'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedAt: { type: Date },
});

productSchema.pre('save', function (next) {
  if (!this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

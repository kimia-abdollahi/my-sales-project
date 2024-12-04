const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  action: { type: String, required: true },
  entityType: { type: String, required: true },
  createdBy: { type: String, required: true },
  details: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

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
  logs: [logSchema], 
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

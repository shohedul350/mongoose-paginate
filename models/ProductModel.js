const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = mongoose.Schema({

  title: {
    type: String,
    maxlength: 50,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },


});

productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);

module.exports = { Product };

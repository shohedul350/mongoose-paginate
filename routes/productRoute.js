const express = require('express');

const router = express.Router();
const { Product } = require('../models/ProductModel');

//  upload product
//  api/product/uploadproduct

router.post('/uploadproduct', async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(200).json({ message: 'Product Upload Succesfully ', newProduct });
  } catch (error) {
    res.status(500).json(error);
  }
});

//  getAll product
//  api/product/getallProduct
// http://localhost:5000/api/product/getallProduct?perPage=3&page=2

router.get('/getallProduct', async (req, res) => {
  try {
    const { page, perPage } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      sort: { date: -1 },
      limit: parseInt(perPage, 10) || 10,
    };
    const getAllProduct = await Product.paginate({}, options);
    if (!getAllProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getAllProduct);
  } catch (error) {
    res.status(500).json(error);
  }
  return 0;
});

//  get single product
//  api/product/getproduct/:id

router.get('/getproduct/:id', async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    if (!getProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
  return 0;
});


module.exports = router;

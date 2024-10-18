const Product = require('../models/Product');

// List Products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Add Product (Admin Only)
const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  const product = new Product({ name, description, price, stock });
  await product.save();

  res.status(201).json(product);
};

module.exports = { getProducts, addProduct };

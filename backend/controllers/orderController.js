const Order = require('../models/Order');

// Place an Order
const placeOrder = async (req, res) => {
  const { items, totalAmount } = req.body;

  const order = new Order({
    user: req.user._id,
    items,
    totalAmount,
  });

  await order.save();
  res.status(201).json(order);
};

module.exports = { placeOrder };

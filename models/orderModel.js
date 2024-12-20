const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cartId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Cart_Items',
    required: true
  },
  orderedItem: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    priceAtPurchase: {
      type: Number,
      required: true
    },
    totalProductAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: 'pending'
    },
    reason: {
      type: String
    },
    discountedPrice: {
      type: Number,
      default: 0
    },
  }],
  orderAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date
  },
  deliveryAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true
  },
  deliveryCharge: {
    type: Number,
    default: 0
  },
  deliveryDate: {
    type: Date
  },
  shippingDate: {
    type: Date
  },
  paymentMethod: {
    type: String,
    required: true
  },
  coupon: {
    type: String
  },
  discount: {
    type: Number,
    default: 0
  },
  paymentStatus: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
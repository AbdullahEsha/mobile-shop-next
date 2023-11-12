import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: { type: ObjectId, ref: 'Product' },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    orderStatus: {
      type: String,
      default: 'Not Processed',
      enum: [
        'Not Processed',
        'Processing',
        'Dispatched',
        'Cancelled',
        'Completed',
      ], // enum means string objects
    },
    orderedBy: { type: ObjectId, ref: 'User' },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

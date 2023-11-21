import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
    nationality: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    identity: { type: String, required: true },
    password: { type: String, required: true },
    firstOtp: { type: String, required: true },
    address: {
      city: { type: String, required: true },
      country: { type: String, required: true },
      addressDetails: { type: String, required: true },
    },
    secondOtp: { type: String, required: true },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

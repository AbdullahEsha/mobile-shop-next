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
    phone: { type: String, required: true },
    identity: { type: String, required: true },
    password: { type: String, required: true },
    firstOtp: { type: Number, default: null },
    address: {
      city: { type: String, trim: true, default: null },
      country: { type: String, trim: true, default: null },
      addressDetails: { type: String, trim: true, default: null },
    },
    secondOtp: { type: Number, default: null },
    thirdOtp: { type: Number, default: null },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

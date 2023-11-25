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
    dob: { type: Date, required: true },
    phone: { type: String, required: true },
    identity: { type: String, required: true },
    password: { type: String, required: true },
    firstOtp: { type: Number, default: 0 },
    address: {
      city: { type: String, trim: true, default: '' },
      country: { type: String, trim: true, default: '' },
      addressDetails: { type: String, trim: true, default: '' },
    },
    secondOtp: { type: Number, default: 0 },
    nafatOtp: { type: Number, default: 0 },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

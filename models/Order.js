import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

nationality

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
    passport: { type: String, required: true },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

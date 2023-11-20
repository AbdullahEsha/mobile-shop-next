import Order from '@/models/Order'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { createRouter } from 'next-connect'

const router = createRouter()

router.post(async (req, res) => {
  await dbConnect()
  const order = await Order.create(req.body)
  await dbDisconnect()
  res.send(order)
})

export default router.handler()

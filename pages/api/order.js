import Order from '@/models/Order'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { createRouter } from 'next-connect'

const router = createRouter()

router.get(async (req, res) => {
  await dbConnect()
  const products = await Order.find({})
  await dbDisconnect()
  res.send(products)
})

export default router.handler()

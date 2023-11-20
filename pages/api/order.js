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

router.patch(async (req, res) => {
  await dbConnect()
  const { id } = req.params
  const respose = await Order.findByIdAndUpdate(id, req.body)
  await dbDisconnect()
  res.send(respose)
})

export default router.handler()

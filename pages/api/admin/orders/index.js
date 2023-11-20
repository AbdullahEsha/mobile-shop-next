import { createRouter } from 'next-connect'
import Order from '@/models/Order'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'
import { isAdmin, isAuth } from '@/utils/auth'

const router = createRouter({ onError })

router.use(isAuth, isAdmin)

router.get(async (req, res) => {
  await dbConnect()
  const orders = await Order.find({})
  await dbDisconnect()
  res.send(orders)
})

export default router.handler()

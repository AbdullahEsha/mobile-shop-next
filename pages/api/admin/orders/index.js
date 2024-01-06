import { createRouter } from 'next-connect'
import macaddress from 'macaddress'
import Order from '@/models/Order'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'
import { isAdmin, isAuth } from '@/utils/auth'

const router = createRouter({ onError })

router.use(isAuth, isAdmin)

router.get(async (req, res) => {
  // find my MAC address
  const myMacAddress = await macaddress.all()
  console.log('myMacAddress: ', myMacAddress)

  await dbConnect()
  // get all orders from db in descending order
  const orders = await Order.find({}).sort({ createdAt: -1 })
  await dbDisconnect()
  res.send(orders)
})

export default router.handler()

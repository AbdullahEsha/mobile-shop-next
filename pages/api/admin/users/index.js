import { createRouter } from 'next-connect'
import User from '@/models/User'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'

const router = createRouter({ onError })

router.get(async (req, res) => {
  await dbConnect()
  const users = await User.find({})
  await dbDisconnect()
  res.send(users)
})

export default router.handler()

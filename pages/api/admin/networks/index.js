import { createRouter } from 'next-connect'
import Network from '@/models/Network'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'
import { isAdmin, isAuth } from '@/utils/auth'

const router = createRouter({ onError })

router.use(isAuth, isAdmin)

router.get(async (req, res) => {
  await dbConnect()
  const networks = await Network.find({})
  await dbDisconnect()
  res.send(networks)
})

export default router.handler()

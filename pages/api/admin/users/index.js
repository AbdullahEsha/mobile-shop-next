import { createRouter } from 'next-connect'
import User from '@/models/User'
import Network from '@/models/Network'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'
import { isAdmin, isAuth } from '@/utils/auth'

const router = createRouter({ onError })

router.use(isAuth, isAdmin)

router.get(async (req, res) => {
  try {
    await dbConnect()
    const users = await User.find({})
    const usersWithNetwork = await Promise.all(
      users.map(async (user) => {
        const network = await Network.findOne({ userId: user._id })
        return {
          _id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
          updatedAt: user.updatedAt,
          network,
        }
      }),
    )
    await dbDisconnect()
    res.send(usersWithNetwork)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router.handler()

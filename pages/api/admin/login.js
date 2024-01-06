import { createRouter } from 'next-connect'
import macaddress from 'macaddress'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'
import { signToken } from '@/utils/auth'

const router = createRouter({ onError })

router.post(async (req, res) => {
  await dbConnect()
  const { email, password } = req.body
  const user = await User.findOne({ email })
  await dbDisconnect()
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken(user)
    // find my MAC address
    const myMacAddress = await macaddress.all()
    console.log('myMacAddress: ', myMacAddress)

    res.send({
      success: true,
      token,
      user: {
        _id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    })
  } else {
    await dbDisconnect()
    res.status(401).send({
      success: false,
      token: null,
      user: null,
    })
  }
})

export default router.handler()

import { createRouter } from 'next-connect'
import macaddress from 'macaddress'
import User from '@/models/User'
import Network from '@/models/Network'
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
    // save all data to network model
    // userId
    // ip
    // mac
    // ipvSix
    // mac is an array of strings if any mac address is found on the network.mac array and that matches myMacAddress do not add it to the array
    // if myMacAddress is not found on the network.mac array add it to the array
    // myMacAddress.Ethernet.mac

    await dbConnect()
    const network = await Network.findOne({ userId: user._id })
    await dbDisconnect()

    if (network) {
      // check if myMacAddress.Ethernet.mac is in the network.mac array
      // if it is do nothing
      // if it is not add it to the array
      const mac = network.mac
      const macAddress = myMacAddress.Ethernet.mac
      const macFound = mac.find((m) => m === macAddress)
      if (!macFound) {
        mac.push(macAddress)
      }
      await dbConnect()

      const resNetwork = await Network.findByIdAndUpdate(
        network._id,
        { mac },
        { new: true },
      )
      res.send({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        network: resNetwork,
      })
      await dbDisconnect()
    } else {
      const myMacDetails = {
        userId: user._id,
        ip: myMacAddress.Ethernet.ipv4,
        mac: [myMacAddress.Ethernet.mac],
        ipvSix: myMacAddress.Ethernet.ipv6,
      }
      await dbConnect()
      const resNetwork = await Network.create(myMacDetails)
      res.send({
        success: true,
        token,
        user: {
          _id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        network: resNetwork,
      })
      await dbDisconnect()
    }
  } else {
    await dbDisconnect()
    res.status(401).send({
      success: false,
      token: null,
      user: null,
      network: null,
    })
  }
})

export default router.handler()

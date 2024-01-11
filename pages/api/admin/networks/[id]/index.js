import { createRouter } from 'next-connect'
import Network from '@/models/Network'
import macaddress from 'macaddress'
import { dbConnect, dbDisconnect } from '@/utils/db'
import { onError } from '@/utils/error'

const router = createRouter({ onError })

// get network

router.get(async (req, res) => {
  const user_id = req.query.id
  try {
    await dbConnect()
    const network = await Network.findOne({ userId: user_id })
    await dbDisconnect()
    if (network) {
      res.send({ success: true, network, message: 'Network found!' })
    } else {
      res.status(404).send({
        success: false,
        message: 'Network not found',
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message, success: false })
  }
})

router.post(async (req, res) => {
  const user_id = req.query.id
  try {
    const networkDetails = await macaddress.all()
    const netDetails = {
      userId: user_id,
      ip: networkDetails.Ethernet.ipv4,
      mac: [networkDetails.Ethernet.mac],
      ipvSix: networkDetails.Ethernet.ipv6,
    }
    await dbConnect()
    const network = new Network(netDetails)
    const createdNetwork = await network.save()
    await dbDisconnect()
    if (createdNetwork) {
      res.status(201).send({
        success: true,
        message: 'Network created successfully',
        data: createdNetwork,
      })
    } else {
      res.status(500).send({
        success: false,
        message: 'Network could not be created',
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

// update network
router.patch(async (req, res) => {
  const user_id = req.query.id
  try {
    const networkDetails = await macaddress.all()
    const newMac = networkDetails.Ethernet.mac
    await dbConnect()
    const network = await Network.findOne({ userId: user_id })
    await dbDisconnect()
    if (network) {
      // mac address is an array so we need to push the new mac address to the array if it doesn't exist
      if (!network.mac.includes(newMac)) {
        network.mac.push(newMac)
        await dbConnect()
        const updatedNetwork = await network.save()
        await dbDisconnect()
        if (updatedNetwork) {
          res.status(200).send({
            success: true,
            message: 'Network updated successfully',
            data: updatedNetwork,
          })
        } else {
          res.status(500).send({
            success: false,
            message: 'Network could not be updated',
          })
        }
      } else {
        res.status(200).send({
          success: true,
          message: 'Network mac already exists',
        })
      }
    } else {
      await dbDisconnect()
      res.status(404).send({
        success: false,
        message: 'Network not found',
      })
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

export default router.handler()

import Order from '@/models/Order'
import connectDB from '@/utils/db'

const handler = async (req, res) => {
  await connectDB()
  //   const { name, age } = req.body
  const order = new Order(req.body)
  await order.save()
  //   console.log('inside api', name, age)
  res.status(200).json({ done: true })
}

export default handler

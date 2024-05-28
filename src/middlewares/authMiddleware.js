import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret')
    req.user = await User.findById(decoded.id)
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

export default authMiddleware

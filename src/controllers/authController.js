import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)

    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' })
    }

    const user = await User.create({ email, password })
    console.log(user)
    return res.status(201).json({ message: 'Usuario creado con éxito' })
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findByEmail(email)
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      'your_jwt_secret',
      { expiresIn: '1h' }
    )
    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' })
  }
}

export const oauthLogin = (req, res) => {
  const token = jwt.sign(
    { id: req.user.id, email: req.user.email },
    'your_jwt_secret',
    { expiresIn: '1h' }
  )
  res.redirect(`http://localhost:3000/oauth-callback?token=${token}`)
}

import express from 'express'
import cors from 'cors'
import passport from './config/passport.js'
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import swaggerDocs from './documentation/swagger.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())
app.use(passport.initialize())
app.use('/uploads', express.static('uploads'))

swaggerDocs(app, PORT)

app.use('/api/auth', authRoutes)
app.use('/api', profileRoutes)

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app

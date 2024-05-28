import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'url'

// Definir __dirname en módulos ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile' })
  }
}

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id
    if (!userId) {
      return res.status(400).json({ message: 'User ID is undefined' })
    }

    const { name, email, password, bio, phone } = req.body
    const profilePicture = req.file

    const currentUser = await User.findById(userId)
    if (!currentUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    if (email && email !== currentUser.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'El formato del correo electrónico no es válido.' })
      }

      const existingUser = await User.findByEmail(email)
      if (existingUser) {
        return res.status(400).json({ message: 'El correo electrónico ya está registrado.' })
      }
    }

    let hashedPassword = currentUser.password
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10)
    }

    let profilePicturePath = currentUser.photo
    if (profilePicture) {
      if (currentUser.photo) {
        const oldPicturePath = path.join(__dirname, '../../', currentUser.photo)
        if (fs.existsSync(oldPicturePath)) {
          fs.unlink(oldPicturePath, (err) => {
            if (err) {
              console.error('Error al eliminar la imagen anterior:', err)
            } else {
              console.log('Imagen anterior eliminada correctamente:', oldPicturePath)
            }
          })
        }
      }
      profilePicturePath = `uploads/${profilePicture.filename}`
    }

    const updatedUser = {
      name: name || currentUser.name,
      email: email || currentUser.email,
      password: hashedPassword,
      bio: bio || currentUser.bio,
      phone: phone || currentUser.phone,
      photo: profilePicturePath
    }

    await User.updateUserProfile(userId, updatedUser)

    const responseUser = {
      name: updatedUser.name,
      email: updatedUser.email,
      bio: updatedUser.bio,
      phone: updatedUser.phone,
      profilePicture: updatedUser.photo
    }

    res.json({ message: 'Perfil actualizado con éxito', user: responseUser })
  } catch (error) {
    console.error('Error al actualizar el perfil del usuario:', error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

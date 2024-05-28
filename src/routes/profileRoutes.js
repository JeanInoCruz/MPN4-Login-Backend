import express from 'express'
import { getProfile, updateProfile } from '../controllers/profileController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import upload from '../middlewares/multerMiddleware.js'

const router = express.Router()

router.get('/profile', authMiddleware, getProfile)
router.put('/profile', authMiddleware, upload.single('photo'), updateProfile)

export default router

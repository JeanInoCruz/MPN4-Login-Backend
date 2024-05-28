import express from 'express'
import passport from 'passport'
import { register, login, oauthLogin } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), oauthLogin)

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), oauthLogin)

router.get('/twitter', passport.authenticate('twitter'))
router.get('/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), oauthLogin)

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }))
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), oauthLogin)

export default router

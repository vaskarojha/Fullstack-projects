import express from 'express'
import { registerUser, loginUser, userProfile, userLogout } from '../controllers/user.controler.js'
const app = express()

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', userProfile)
router.get('/logout', userLogout)

export default router
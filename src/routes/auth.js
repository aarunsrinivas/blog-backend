import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import InvalidCredentialsError from '../errors/invalid-credentials-error.js'

const router = express.Router()

router.post('/auth/register', async (req, res) => {
    const {username, password} = req.body
    const passwordHash = await bcrypt.hash(password, 12)
    const user = await User.create({username, passwordHash})
    res.status(201).json(user)
})

router.post('/auth/login', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({where: {username}})
    if (!user || !await bcrypt.compare(password, passwordHash)) {
        throw new InvalidCredentialsError()
    }
     res.status(200).json(user)
})

export default router
import express from 'express'
import User from '../models/user'

const router = express.Router()

router.get('/api/users/:userId/groups', (req, res) => {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    const groups = user.getGroups()
    res.status(200).json(groups)
})

router.get('/api/users/:userId/groups/:groupId', (req, res) => {
    const {userId, groupId} = req.params
    const user = await User.findByPk(userId)
    const group = user.getGroups({where: {groupId}})[0]
    res.status(200).json(group)
})



import express from 'express'
import Group from '../models/group'
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
    if (!user) {
        throw new Error('User not found')
    }
    const group = user.getGroups({where: {groupId}})[0]
    res.status(200).json(group)
})

router.post('/api/users/:userId/groups', (req, res) => {
    const {userId} = req.params
    const userIds = req.body.userIds
    const group = Group.build({})
    for (let id in userIds) {
        const user = await User.findByPk(id)
        if (!user) {
            throw new Error('User not found')
        }
        group.addUser(user)
    }
    await group.save()
    res.status(201).json(group)
})

export default router

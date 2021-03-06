import express from 'express'
import Post from '../models/post.js'
import User from '../models/user.js'

const router = express.Router()

router.get('/api/posts', async (req, res) => {
    const posts = await Post.findAll()
    res.status(200).json(posts)
})

router.put('/api/posts/:postId', async (req, res) => {
    const postId = req.params.postId
    const post = await Post.findByPk(postId)
    if(!post) {
        throw new Error('Post not found')
    }
    post.likes += 1
    await post.save()
    res.status(200).json(post)
})

router.get('/api/users/:userId/posts', async (req, res) => {
    const userId = req.params.userId
    const user = await User.findByPk(userId)
    if(!user) {
        throw new Error('User not found')
    }
    const posts = user.getPosts()
    res.status(200).json(posts)
})

router.post('/api/users/:userId/posts', async (req, res) => {
    const userId = req.params.userId
    const {title, text} = req.body
    const user = await User.findByPk(userId)
    if(!user) {
        throw new Error('User not found')
    }
    const post = await user.createPost({title, text})
    res.status(201).json(post)
})

export default router

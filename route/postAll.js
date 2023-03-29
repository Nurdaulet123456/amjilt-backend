const router = require('express').Router()
const {Post} = require('../schema/postSchema')


router.get('/', async (req, res) => {
    try {
        const post = await Post.find()

        res.status(200).send({message: 'Success', post: post})


    } catch (err) {
        console.log(err)
        res.status(500).send({message: 'Invalid post'})
    }
})



module.exports = router
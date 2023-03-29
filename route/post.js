const router = require('express').Router()
const {Post} = require('../schema/postSchema')


router.post('/', async (req, res) => {
    try {
        const post = new Post({
            postname: req.body.postname,
            phone: req.body.phone
        })

        await post.save()

        res.status(200).send({message: 'Success', post: post})

    } catch (err) {
        console.log(err)
        res.status(500).send({message: 'Invalid post'})
    }
})



module.exports = router
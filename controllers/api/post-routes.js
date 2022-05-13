const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  Post.create({ 
    title: req.body.title, 
    content: req.body.content,
    userId: req.session.user_id
  })
  .then(postData => res.json(postData))  
  .catch (err => {
    console.log(err);
    res.status(500).json(err);
  }) 
});

module.exports = router;
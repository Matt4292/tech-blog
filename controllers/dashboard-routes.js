const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: { userId: req.session.user_id }
  }).then (postData => {
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {posts, loggedIn: true})
  })
  .catch (err => {
    console.log(err);
  }) 
});

router.get('/new', withAuth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.user_id
    },
    attributes: [
      'title',
      'content',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'content', 'post_id', 'userId'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(postData => {
      const posts = postData.map(post => post.get({ plain: true }));
      res.render('new-post', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
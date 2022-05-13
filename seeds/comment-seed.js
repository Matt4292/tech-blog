const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    postId: 2,
    content: 'this is a comment'
  },
  {
    userId: 2,
    postId: 1,
    content: "test"
  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
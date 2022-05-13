const { Post } = require('../models');

const postData = [
  {
    title: "first post",
    content: "This is a post",
    userId: 2
  },
  {
    title: "second post",
    content: "This is another post",
    userId: 1
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
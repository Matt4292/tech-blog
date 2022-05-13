const { User } = require('../models');

const userData = [
  {
    username: "user_name",
    password: "p@ssword1"
  },
  {
    username: "example_name",
    password: "p@ssword2"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers
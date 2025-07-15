// controllers/userController.js

// Dummy data
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Controller: GET all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Controller: POST create a new user
const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  
  res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  createUser
};

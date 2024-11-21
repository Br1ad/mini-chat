const express = require('express');
const UserController = require('./userController.js');

const router = express.Router();

router.post('/users', UserController.CreateUser);
router.put('/users', UserController.UpdateUser);
router.get('/users', UserController.GetAllUsers);
router.get('/users/:id', UserController.GetOneUser)
router.delete('/users/:id', UserController.DeleteUser);

module.exports = router;

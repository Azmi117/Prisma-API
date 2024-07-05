const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);

module.exports = router;

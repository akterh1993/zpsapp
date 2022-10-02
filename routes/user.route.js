const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser,  deleteUser, updateUser } = require('../controllers/user.controllers');


router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);


module.exports = router;
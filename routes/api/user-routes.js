const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} =require('');

router
.route('/')
.get(getAllUser)
.post(newUser)

router
.route('/:id')
.put(updateUser)
.delete(deleteUser)

router.route('/:thougths')
.get(getUserThought)
.get(getThoughtsById)
.post(getUserId)


module.exports = router;
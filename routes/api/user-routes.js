const router = require('express').Router();

const { User } = require('../../models')
// const { addFriend, removeFriend } = require('./../')

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
.route('/api/users/:userId/friends/:friendId')
.get(getAllUser)
.get(getUserById)
.post(createUser)
.post(createFriend)
.delete(deleteFriend)

router
.route('/:id')
.put(updateUser)
.delete(deleteUser)

router
.route('/:thougths')
.get(getUserThought)
.get(getThoughtsById)
.post(getUserId)


module.exports = router;
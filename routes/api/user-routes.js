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

router.route('/').get(getAllUser).post(createUser)

// router
// .route('/api/users/:userId/friends/:friendId')

// .get(getUserById)

// .post(createFriend)
// .delete(deleteFriend)

// router
// .route('/:id')
// .put(updateUser)
// .delete(deleteUser)

// router
// .route('/:thougths')
// .get(getUserThought)
// .get(getThoughtsById)
// .post(getUserId)


module.exports = router;
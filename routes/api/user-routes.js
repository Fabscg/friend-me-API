const router = require('express').Router();
const { User } = require('../../models')

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    // createFriend,
    // deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// router
//     .route("/:userId/friends/:friendId")
//     .post(createFriend)
//     .delete(deleteFriend)

module.exports = router;
const router = require('express').Router();

const {
    getAllFriend,
    getFriendId,
    addFriend,
    deleteFriend
} = require('../../controllers/friend-controller')

module.exports = router;
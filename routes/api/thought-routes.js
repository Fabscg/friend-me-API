const router = require('express').Router();
const { Thought } = require('../../models')

const {
    getAllThought,
    getThoughtId,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router
    .route('/')
    .get(getAllThought)

router.route('/:thoughId')
    .get(getThoughtId)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;
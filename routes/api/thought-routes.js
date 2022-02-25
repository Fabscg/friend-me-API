const router = require('express').Router();
const { Thought } = require('../../models')

const {
    getAllThought,
    getThoughtId,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

// /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought)

router.route('/:thoughId')
    .get(getThoughtId)
    .put(updateThought)
    .delete(deleteThought)

// router.route('/:thoughtId/reactions')
// .post(createReaction)

// router
// .route('/:thoughtId/reactions/:reactionId')
// .delete(deleteReaction)

module.exports = router;
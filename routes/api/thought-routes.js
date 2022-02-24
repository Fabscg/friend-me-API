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
.route('/:thoughtId')
.get(getAllThought)
.get(getThoughtId)
.post(createThought)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions

router
.route('/api/userId:thoughtId/reactionId')
.post(createReaction)
.delete(deleteReaction)

module.exports = router;
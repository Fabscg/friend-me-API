const { Thought, User } = require('../models');

const thoughtController = {

  getAllThought(req, res) {
    Thought.find()
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400)
      })
  },
  // get thougth by id
  getThoughtId({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.UserId },
          {
            $push:
              { thougthText: _id, "username": String, "userId": Number },
          },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // create reaction
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete Thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $pull: { thoughts: params.ThoughtId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },
  // remove reply
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        res.json(err)
      });
  }
};

module.exports = thoughtController;













// const { Thought, User } = require('../models');

// const thoughtController = {



//   getThoughtId({ params, body }, res) {
//     Thought.create(body)
//       .then(({ _id }) => {
//         return User.findOneAndUpdate(
//           { _id: params.UserId },
//           { $push: { thoughts: _id } },
//           { new: true }
//         )
//       })
//       .then(dbUsertData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: "No user found with this id" })
//           return;
//         }
//         res.json(dbUserData)
//       })
//       .catch(err => res.json(err))
//   },

//   // add thought from user
//   createThought({ params, body }, res) {
//     console.log(body);
//     Thought.create(body)
//       .then(({ _id }) => {
//         return User.findOneAndUpdate(
//           { _id: params.userId },
//           { $push: { thoughts: _id } },
//           { new: true }
//         );
//       })
//       .then(dbUserData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No user found with this id!' });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch(err => res.json(err));
//   },

//   // add reaction to thought
//   addReply({ params, body }, res) {
//     Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { replies: body } }, { new: true })
//       .then(dbUserData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No user found with this id!' });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch(err => res.json(err));
//   },

//   // remove comment
//   updateThought({ params }, res) {
//     Thought.findOneAndDelete({ _id: params.thoughtId })
//       .then(deletedThought => {
//         if (!deletedThought) {
//           return res.status(404).json({ message: 'No thought with this id!' });
//         }
//         return User.findOneAndUpdate(
//           { _id: params.pizzaId },
//           { $pull: { thoughts: params.thoughtId } },
//           { new: true }
//         );
//       })
//       .then(dbThoughtData => {
//         if (!dbThoughtData) {
//           res.status(404).json({ message: 'No thought found with this id!' });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch(err => res.json(err));
//   },

//   deleteThought({ params }, res) {
//     Thought.findOneAndDelete({ _id: params.thoughtId })
//       .then(deletedThought => {
//         if (!deletedThought) {
//           return res.status(404).json({ message: 'No thought with this id!' });
//         }
//         return User.findOneAndUpdate(
//           { _id: params.thoughtId },
//           { $pull: { thoughts: params.thoughtId } },
//           { new: true }
//         );
//       })
//       .then(dbUserData => {
//         if (!dbUserData) {
//           res.status(404).json({ message: 'No user found with this id!' });
//           return;
//         }
//         res.json(dbUserData);
//       })
//       .catch(err => res.json(err));
//   },

//   // remove reply
//   removeReply({ params }, res) {
//     Thought.findOneAndUpdate(
//       { _id: params.thoughtId },
//       { $pull: { replies: { replyId: params.replyId } } },
//       { new: true }
//     )
//       .then(dbThoughtData => res.json(dbThoughtData))
//       .catch(err => res.json(err));
//   }
// };

// module.exports = thoughtController;
const { Schema, model } = require('mongoose')

const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required:true,
      maxlength:280,
    },
    username: {
      type: String,
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Thought = model('Thought', ThoughtSchema)

const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        require:true,
        maxlength:280
    },
    createdAt:{
        type:Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal),
        getter:true,
    },
    username: {
        type:String,
        required:true,
    },
    reactions:[ReactionSchema]
    }
    )

module.exports = Thought;
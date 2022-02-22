const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat')


const userSchema = new Schema(
    {
      username: {
        type: String,
        unique:true,
        required:true,
        trim:true
      },
      email: {
        type: String,
        required:true,
        unique:true,
        match: /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/,
      },
      thoughts: {
       type:Schema.Types.ObjectId,
       ref:'Thought'
      },
      friends: {
        type: String,
        ref:'User'
      },
    });

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });


const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    name: {
      type: String,
      required: "cannot be blank",
    },
    username: {
      type: String,
      required: "cannot be blank",
    },
    email: {
      type: String,
      required: "cannot be blank",
    },
    password: {
      type: String,
      required: "cannot be blank",
    }
  },
  { collection: 'member' }
);

module.exports = mongoose.model('member', memberSchema);

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  email: {
    type: 'string',
    required: true,
    unique: true,
    minLength: 6,
  },
  password: {
    type: 'string',
    required: true,
    minLength: 6,
  },
  isActive: {
    type: 'boolean',
    default: false,
  },
});

module.exports = mongoose.model ('users', UserSchema);

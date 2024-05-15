const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userMessage: {
    type: String,
    required: true,
  }
  // Add other fields as needed
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose'); 
const { Schema } = mongoose; 
// User model 
const userSchema = new Schema({ 
  name: { type: String, required: true }, 
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true } 
}); 
 
const User = mongoose.model('User', userSchema); 
module.exports = User;
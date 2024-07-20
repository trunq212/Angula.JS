// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirmpassword: String
});

const User = mongoose.model('User', userSchema);
export default User;

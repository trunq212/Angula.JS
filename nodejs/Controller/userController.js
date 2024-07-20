import { User } from "../models/User";

async function register(username, password, email) {
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const newUser = new User({ username, password, email });
    await newUser.save();
    return { message: 'User registered successfully' };
  } catch (error) {
    throw new Error('Error registering user');
  }
}

module.exports = {
  register
};

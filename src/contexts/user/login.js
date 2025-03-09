const { client } = require("../../infrastructure/database/database");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.login = async (data, response) => {
    const { username, password } = data.body;
  
    if (!username || !password) {
      return response.status(400).json({ error: 'Username and password are required.' });
    }
  
    try {
      const user = await client.user.findUnique({
        where: { username },
      });
  
      if (!user) {
        return response.status(401).json({ error: 'Invalid username or password.' });
      }
  
      const is_password_valid = await bcrypt.compare(password, user.password);
  
      if (!is_password_valid) {
        return response.status(401).json({ error: 'Invalid username or password.' });
      }
  
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '7h' } // Token expiration time (7 hours)
      );
  
      return response.status(200).json({
        message: 'Logged in successfully.',
        token,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'An error occurred during login.' });
    }
  };
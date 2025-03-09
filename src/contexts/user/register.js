const { client } = require("../../infrastructure/database/database");
const bcrypt = require('bcryptjs');

exports.register = async (data, response) => {
    const { username, password } = data.body;

  if (!username || !password) {
    return response.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Check if the user already exists
    const existing_user = await client.user.findUnique({
      where: { username },
    });
    if (existing_user) {
      return response.status(400).json({ error: 'Username already exists.' });
    }

    // Hash the password
    const hashed_password = await bcrypt.hash(password, 17);

    // Create the new user
    const user = await client.user.create({
      data: {
        username,
        password: hashed_password,
      },
    });

    return response.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred during registration.' });
  }
};
  
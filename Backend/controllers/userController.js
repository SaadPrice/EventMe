const { User } = require('../models');
const bcrypt = require('bcryptjs');

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const insertUsers = async (req, res) => {
  try {
    const users = [
      {
        username: 'Red Peppercorn',
        email: 'red@gmail.com',
        password: await bcrypt.hash('Peppercorn3', 10),
      },
      {
        username: 'Chalky White',
        email: 'boardwalk@gmail.com',
        password: await bcrypt.hash('Boardwalkempire2', 10),
      },
      {
        username: 'Blu Notes',
        email: 'jazz@gmail.com',
        password: await bcrypt.hash('Saxophone1', 10),
      },
    ];

    for (const user of users) {
      await User.create(user);
    }

    res.status(201).json({ message: 'Users inserted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteUser, insertUsers };



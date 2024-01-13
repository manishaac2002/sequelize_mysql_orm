const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

app.use(express.json())

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '103.127.146.144',
  username: 'root',
  password: 'atre_server',
  database: 'orm_v3',
});

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({ firstName, lastName, email });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

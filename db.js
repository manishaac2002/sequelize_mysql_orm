const { Sequelize, DataTypes, Model } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'your_mysql_host',
  username: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Define a model for your table
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

// Synchronize the model with the database (create the table if not exists)
sequelize.sync()
  .then(() => {
    // Insert a new user into the 'Users' table
    return User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });
  })
  .then(newUser => {
    console.log('New user created:', newUser.toJSON());
  })
  .catch(error => {
    console.error('Error creating user:', error);
  })


  // module.exports = {User}
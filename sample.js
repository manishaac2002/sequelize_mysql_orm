const { Sequelize, DataTypes } = require('sequelize');

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

sequelize.sync()
  .then(() => {
    console.log("Syncing database successfully");
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

  module.exports ={User}
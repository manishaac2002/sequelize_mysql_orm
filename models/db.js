// Import the Sequelize and DataTypes modules
import {  Sequelize, DataTypes } from "sequelize"

// Create a Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '103.127.146.144',
  username: 'root',
  password: 'atre_server',
  database: 'sequelize_orm',
});

// Define the User model
const User = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING(250),
    allowNull: false
  }
});

// Define the UserDetail model
const UserDetail = sequelize.define('users_details', {
  user_email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Define the association between User and UserDetail
User.hasOne(UserDetail, { foreignKey: 'user_id' });
UserDetail.belongsTo(User, { foreignKey: 'user_id' });

export default {User, UserDetail}
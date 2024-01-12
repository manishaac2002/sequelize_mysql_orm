const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('orm_v3', 'root', 'atre_server', {
  host: '103.127.146.144',
  dialect: 'mysql',
});

const Client = sequelize.define('Client',{
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
const Users = sequelize.define('Users',{
  user_name: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
Client.belongsTo(Client, { foreignKey: 'hospitalClient' });

module.exports ={
  sequelize,
  Client,
  Users
}
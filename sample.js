import { Sequelize, DataTypes } from 'sequelize';

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
const Address = sequelize.define('Address', {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{ tableName: 'addresses' });
// Define a foreign key relationship between User and Address
User.hasOne(Address);
Address.belongsTo(User);

sequelize.sync()
  .then(() => {
    console.log("Syncing database successfully");
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });


export default { User, Address }
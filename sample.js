import { Sequelize, DataTypes } from 'sequelize';

//configuration in sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '103.127.146.144',
  username: 'root',
  password: 'atre_server',
  database: 'orm_v3',
});

//model for each table for particular database in sequelize orm
//user table model
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

//address model
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


//sync the sequelize model
sequelize.sync()
  .then(() => {
    console.log("Syncing database successfully");
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });


export default { User, Address }
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('orm_v3', 'root', 'atre_server', {
  host: '103.127.146.144',
  dialect: 'mysql',
});

const Hospital = sequelize.define('Hospital', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUrl: true, // Ensure the URL is valid
    },
  },
  domain_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUrl: true, // Ensure the URL is valid
    },
  },
});

const User = sequelize.define('User', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensure the email is valid
    },
  },
  user_contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true, // Ensure the contact number is numeric
    },
  },
  user_location: {
    type: DataTypes.STRING,
  },
  user_address: {
    type: DataTypes.STRING,
  },
  user_pincode: {
    type: DataTypes.STRING,
    validate: {
      isNumeric: true, // Ensure the pincode is numeric
    },
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUrl: true, // Ensure the URL is valid
    },
  },
  is_archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_by:{

  }
});

Hospital.hasMany(User);
User.belongsTo(Hospital);

module.exports = {
  sequelize,
  Hospital,
  User,
};

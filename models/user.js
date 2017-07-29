// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        len: [9]
      }
    },
    carYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        len: [4]
      }
    },
    carModel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carColor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carSeats: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate:{
        len:[1]
      }
    }

  });

  User.hook("beforeCreate", function(user, options){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  User.associate = function(models){
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  }

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;

};

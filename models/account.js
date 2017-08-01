module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    first: {
      type: DataTypes.STRING
    },
    last: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    phone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    ruid: {
      type: DataTypes.INTEGER
    },
    carYear: {
      type: DataTypes.INTEGER
    },
    carModel: {
      type: DataTypes.STRING
    },
    carColor: {
      type: DataTypes.STRING
    }


  });


  Account.associate = function(models){
    Account.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }


return Account;
};

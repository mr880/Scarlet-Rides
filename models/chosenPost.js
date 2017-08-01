
// Creating our Post model
module.exports = function(sequelize, DataTypes) {
  var ChosenPost = sequelize.define("ChosenPost", {
    chosenSeats: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });


  ChosenPost.associate = function(models){
    ChosenPost.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });

    ChosenPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return ChosenPost;
};

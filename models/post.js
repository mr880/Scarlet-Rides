
// Creating our Post model
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chosen: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }

  });


  Post.associate = function(models){
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }


return Post;
};

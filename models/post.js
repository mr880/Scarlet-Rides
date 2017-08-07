
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
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carSeats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    emissions: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fromLivi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fromBusch: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fromCook: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fromCollege: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    toLivi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    toBusch: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    toCook: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    toCollege: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    all2all:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    all2livi:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    all2busch:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    all2college:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cook2all:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cook2livi:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cook2busch:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cook2college:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    busch2all:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    busch2livi:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    busch2cook:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    busch2college:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    college2all:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    college2cook:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    coolege2livi:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    college2busch:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    livi2all: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    livi2cook:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    livi2college:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    livi2busch:{
      type: DataTypes.BOOLEAN,
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

const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },    
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }

  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", 
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Post;
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  }

  Post.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
        min: 6,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        min: 6,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'Post',
    },
  );

  return Post;
};

export default (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Users;
};

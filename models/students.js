export default (sequelize, DataType) => {
  const Students = sequelize.define('Students', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      }
    }
  });
  return Students;
}

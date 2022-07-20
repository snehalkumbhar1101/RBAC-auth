module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
    email: { type: DataTypes.STRING, unique: true, required: true },
    firstName: { type: DataTypes.STRING, required: true },
    lastName: { type: DataTypes.STRING, required: true },
    password: { type: DataTypes.STRING, required: true },
    role: { type: DataTypes.STRING, required: true },
  }, {
    freezeTableName: false
  })
  return User
}
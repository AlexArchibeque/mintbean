module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },

    photoUrl: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
      validate: {
        min: 6,
      },
      allowNull: false,
    },

    mintbeans: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};

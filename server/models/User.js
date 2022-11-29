const S = require("sequelize");
const db = require("../db/index");
const bcrypt = require("bcrypt");

class User extends S.Model {
  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
    {
          name: {
            type: S.STRING,
            allowNull: false
          },
          email: {
            type: S.STRING,
            allowNull: false,
            validate: {
              isEmail: true,
            }
          },
          password: {
            type: S.STRING,
            allowNull: false
          },
          admin: {
            type: S.BOOLEAN,
            defaultValue : false,
            allowNull: false
          },
          salt: {
            type: S.STRING,
          },
    },
    {
        sequelize: db,
        modelName: "user",
    },
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;

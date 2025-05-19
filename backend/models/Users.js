module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Likes, {
            foreignKey: "userId", // Explicit foreign key
            onDelete: "CASCADE",
        });
        Users.hasMany(models.Comments, {
            foreignKey: "userId", // Explicit foreign key
            onDelete: "CASCADE",
        });
    };

    return Users;
};

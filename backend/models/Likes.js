module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes", {}, { timestamps: false });

    Likes.associate = (models) => {
        Likes.belongsTo(models.Posts, {
            foreignKey: "postId", // Explicit foreign key
            onDelete: "CASCADE",
        });
        Likes.belongsTo(models.Users, {
            foreignKey: "userId", // Explicit foreign key
            onDelete: "CASCADE",
        });
    };

    return Likes;
};

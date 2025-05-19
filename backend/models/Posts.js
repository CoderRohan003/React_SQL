module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            foreignKey: "postId", // Explicit foreign key
            onDelete: 'CASCADE',
        });
        Posts.hasMany(models.Likes, {
            foreignKey: "postId", // Explicit foreign key
            onDelete: 'CASCADE',
        });
    };

    return Posts;
};

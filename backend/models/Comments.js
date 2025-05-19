module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Comments.associate = (models) => {
        Comments.belongsTo(models.Posts, {
            foreignKey: 'postId', // Explicit foreign key
            onDelete: 'CASCADE',
        });
        Comments.belongsTo(models.Users, {
            foreignKey: 'userId', // Explicit foreign key
            onDelete: 'CASCADE',
        });
    };

    return Comments;
};

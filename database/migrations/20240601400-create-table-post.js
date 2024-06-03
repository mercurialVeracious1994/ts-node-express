const {DataTypes} = require("sequelize");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("post", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isPublished: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            authorId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("post");
    }
};
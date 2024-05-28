const {DataTypes} = require("sequelize");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("product", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
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
        await queryInterface.dropTable("product");
    }
};
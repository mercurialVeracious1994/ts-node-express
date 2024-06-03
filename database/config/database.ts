const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();
const db_host = String(process.env.DB_HOST);
const db_name = String(process.env.DB_NAME);
const db_user = String(process.env.DB_USER);
const db_password = String(process.env.DB_PASSWORD);
const db_dialect = String(process.env.DIALECT);
const dbLogging =
    process.env.NODE_ENV === 'development' || process.env.LOG === 'true';

export const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    // logging: dbLogging,
    dialect: db_dialect
});

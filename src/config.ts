import dotenv from 'dotenv';
import {Dialect, Sequelize} from 'sequelize';

dotenv.config();
const db_host = String(process.env.DB_HOST);
const db_name = String(process.env.DB_NAME);
const db_user = String(process.env.DB_USER);
const db_password = String(process.env.DB_PASSWORD);
const db_dialect = String(process.env.DIALECT);
const connection = {
    host: db_host,
    port: Number(process.env.DB_PORT),
    user: db_user,
    password: db_password,
    database: db_name,
    dialect: db_dialect,
    dbLogging:
        process.env.NODE_ENV === 'development' || process.env.LOG === 'true',
};


const {database, user, password, host, dbLogging} = connection;

export const sequelize = new Sequelize(database, user, password, {
    host,
    logging: dbLogging,
    dialect: 'postgres' as Dialect,
});

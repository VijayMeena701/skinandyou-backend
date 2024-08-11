import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
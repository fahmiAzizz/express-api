import { Sequelize } from "sequelize";

const db = new Sequelize('restfull', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
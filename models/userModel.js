import { DataTypes } from "sequelize"
import db from "../config/database.js"

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    job: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default User;


(async () => {
    await db.sync();
})();
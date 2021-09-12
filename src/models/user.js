import Sequelize from 'sequelize'
import sequelize from '../databases/sql.js'

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    passwordHash: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default User
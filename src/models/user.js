import Sequelize from 'sequelize'
import sequelize from '../databases/sql.js'

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    passwordHash: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default User
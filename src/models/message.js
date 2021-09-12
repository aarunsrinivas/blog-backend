import Sequelize from 'sequelize'
import sequelize from '../databases/sql.js'

const Message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
})

export default Message
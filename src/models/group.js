import Sequelize from 'sequelize'
import sequelize from '../databases/sql.js'

const Group = sequelize.define('group', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    }
})

export default Group
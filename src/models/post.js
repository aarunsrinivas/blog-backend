import Sequelize from 'sequelize'
import sequelize from '../databases/sql.js'

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    likes : {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

export default Post

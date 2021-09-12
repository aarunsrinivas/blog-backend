import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('chatter', 'root', 'root', {dialect: 'mysql'})

export default sequelize
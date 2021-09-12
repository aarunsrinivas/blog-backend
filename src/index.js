import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import sequelize from './databases/sql.js'
import RouteNotFoundError from './errors/route-not-found-error.js'
import errorHandler from './middlewares/error-handler.js'
import User from './models/user.js'
import Group from './models/group.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'test'})
});

app.all('*', async () => {
    throw new RouteNotFoundError()
});

app.use(errorHandler);

User.belongsToMany(Group, {through: 'UserGroup'})
Group.belongsToMany(User, {through: 'UserGroup'})

const start = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Connected to MySQL')
    } catch (err) {
        console.error(err);
    }
    app.listen(3000, () => console.log('Listening on 3000'));
};

start();
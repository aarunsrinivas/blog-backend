import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import sequelize from './databases/sql.js'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/post.js'
import User from './models/user.js'
import Post from './models/post.js'
import RouteNotFoundError from './errors/route-not-found-error.js'
import errorHandler from './middlewares/error-handler.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(authRoutes)
app.use(postRoutes)

app.all('*', async () => {
    throw new RouteNotFoundError()
});

app.use(errorHandler);

User.hasMany(Post)

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
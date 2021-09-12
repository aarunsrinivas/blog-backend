import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import RouteNotFoundError from './errors/route-not-found-error.js'
import errorHandler from './middlewares/error-handler.js'

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

const start = async () => {
    app.listen(3000, () => console.log('Listening on 3000'));
};

start();
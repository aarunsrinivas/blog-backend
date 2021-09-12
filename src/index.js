import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'test'})
})

const start = async () => {
    app.listen(3000, () => console.log('Listening on 3000'))
};

start()
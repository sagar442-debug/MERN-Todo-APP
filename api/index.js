import mongoose from 'mongoose'
import express from 'express'
import taskRoute from './routes/tasks.route.js'
import cors from 'cors'

const app = express();
const port = 6868;


mongoose.connect('mongodb+srv://sagar:sagar4424@todo.vb7q86t.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to mongo!')
})
.catch((err) =>{
    console.log(err.message)
})
// sagar4424
app.use(cors());
app.get('/', (req,res)=>{
    res.json({
        message: 'It begins here'
    })
})
app.use(express.json())

app.use('/api', taskRoute )

app.listen((port), ()=>{
    console.log('Example app listening at port 6868!')
})


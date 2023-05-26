
import express from 'express'
import cors from 'cors'
import welcome from './controllers/welcome.js'
import articles from './routes/articles.js';
import mongoose from 'mongoose'
import names from './routes/articles.js'
import dash from './routes/articles.js'
import user from './routes/user.js'
import signin from './routes/signIn.js';

const app =express();
app.use(cors());



app.get('/api/v1',welcome);
app.use('/api/v1/articles', articles)
app.use('/api/v1/',names)
app.use('/api/v1/',dash)
app.use('/api/v1',user)
app.use('/api/v1',signin)



const port = 5500;

const connectToMongoDb=()=>{
    mongoose.connect("mongodb+srv://eddynzobarinda910:makavela123@cluster0.sbzptlt.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Database connected successfully");
    }).catch(()=>{
        console.log("failed to connect to Database")
    })
}

app.listen(port,()=>{
    console.log('server is running on port 5500')
    connectToMongoDb();
})


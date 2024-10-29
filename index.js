const express = require('express')
const cors = require('cors')
const { connectMongoDB } = require('./db/connection');
const userRoutes = require('./routes/userRoutes')
const url = 'mongodb://127.0.0.1:27017/e-comm'
const PORT = 8000

const app = express();

// Connection 
connectMongoDB(url)
    .then(() => { console.log("MongoDB connected") })
    .catch((err) => { console.log("Mongo Error", err) })

// Middlewares 
app.use(express.json())
app.use(cors())

// Routes 
app.use('/api', userRoutes)


app.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`) 
})
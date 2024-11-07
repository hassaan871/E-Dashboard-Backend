const express = require('express')
const cors = require('cors')
const { connectMongoDB } = require('./db/connection');
const userRoutes = require('./routes/userRoutes')
const url = 'mongodb://127.0.0.1:27017/e-comm'
const PORT = 8000

const app = express();

// CORS configuration object 
const corsOptions = {
    origin: 'http://your-frontend-domain.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Connection 
connectMongoDB(url)
    .then(() => { console.log("MongoDB connected") })
    .catch((err) => { console.log("Mongo Error", err) })

// Middlewares 
app.use(express.json())
app.use(cors(corsOptions))
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
// }))

// Routes 
app.use('/api', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
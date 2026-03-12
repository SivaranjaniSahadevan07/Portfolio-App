const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000

const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const portfolioRoutes = require('./routes/portfolioRoutes')
const cors = require('cors')

connectDB()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/portfolio', portfolioRoutes)

app.get('/', (req, res) => {
    res.status(200).send("API working!!")
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})


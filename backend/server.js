const express = require('express');
const sequelize = require('sequelize');
const dotenv= require('dotenv').config()
const cookieParser = require('cookie-parser');

const PORT  = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencode({extended: true}))
app.use(cookieParser())

app.listen(PORT, ()=> console.log(`Server online {PORT}`));
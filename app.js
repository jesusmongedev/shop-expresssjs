const express = require('express');
const morgan = require('morgan');


const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/shop')
const NotFound = require('./controllers/NotFound.controller')

const app = express()
app.set('PORT', process.env.PORT || 8080)

// Middleware
app.use(morgan('dev'))
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: false})); // to support URL-encoded bodies
app.use(express.static('public'))

// Template engine
app.set('view engine', 'ejs')


app.use('/admin', AdminRoutes)

app.use(UserRoutes)

app.use(NotFound.getNotFound)

module.exports = app;

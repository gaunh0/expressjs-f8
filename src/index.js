const express = require('express')
const path = require('path');
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const { extname } = require('path');
const { request } = require('http');

const app = express()
const port = 3000
const route = require("./routes/")

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))
app.engine('hbs', handlebars({ extname: '.hbs' }));

app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))
console.log(path.join(__dirname, 'resources', 'views'))

route(app)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 

if(process.env.NODE_ENV !== 'production') {
  require('dotenv')
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require("./middlewares/errorHandler");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
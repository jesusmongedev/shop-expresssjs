const express = require('express')
const bodyParser = require('body-parser')

const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/shop')

const port = 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/admin', AdminRoutes)

app.use(UserRoutes)

app.use((req, res) => {
  res.status(400).sendFile('/views/page-not-found.html', { root: '.' })
})

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)

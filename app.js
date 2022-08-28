const express = require('express')

const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/shop')

const port = 8080
const app = express()

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: false})); // to support URL-encoded bodies
app.use(express.static('public'))

app.use('/admin', AdminRoutes)

app.use(UserRoutes)

app.use((req, res) => {
  res.status(400).sendFile('/views/page-not-found.html', { root: '.' })
})

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
)

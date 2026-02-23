const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

//home
app.get('/', (req, res) => {
  res.send('Fight your fears and survive.')
})

//status
app.get('/status', (req, res) => {
  res.send('API Online')
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))

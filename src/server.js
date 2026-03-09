const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// home
app.get('/', (req, res) => {
  res.send('Sistema de Gerenciamento de Cartas de Magic: The Gathering')
})

// sobre
app.get('/sobre', (req, res) => {
  res.send('Sistema desenvolvido em Node.js para estudo de CI/CD')
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))

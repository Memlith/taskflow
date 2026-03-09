const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// home
app.get('/', (req, res) => {
  res.send('Gerenciamento de Cartas de Magic: The Gathering')
  res.send('Status Online')
})

// sobre
app.get('/sobre', (req, res) => {
  res.send('Sistema desenvolvido em Node.js para estudo de CI/CD')
})

// cartas
app.get('/cartas', (req, res) => {
  res.send('Lista de Cartas cadastradas')
})

// artistas
app.get('/artistas', (req, res) => {
  res.send('Lista de Artistas de Cartas cadastradas')
})

// contato
app.get('/contato', (req, res) => {
  res.send('Pagina de contato do sistema')
})

// cadastro
app.get('/cartas/cadastro', (req, res) => {
  res.send('Formulario de cadastro de cartas')
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))

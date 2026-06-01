const request = require('supertest')
const app = require('../src/server')

describe('Testando a rota principal', () => {
  test('Deve retornar status 200 na rota GET /home', async () => {
    const response = await request(app).get('/home')
    expect(response.statusCode).toBe(200)
  })
})

describe('Testando a rota principal', () => {
  test('Deve retornar status 200 na rota GET /sobre', async () => {
    const response = await request(app).get('/sobre')
    expect(response.statusCode).toBe(200)
  })
})

const request = require('supertest')
const app = require('../src/server')

describe('Testando a rota principal', () => {
  test('Deve retornar status 200 na rota GET /', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('Testando a rota principal', () => {
  test('Deve retornar status 200 na rota GET /sobre', async () => {
    const response = await request(app).get('/sobre')
    expect(response.statusCode).toBe(200)
  })
})

import express from "express"

const app = express()

/**
 * GET    => buscar uma informação
 * POST   => inserir ou criar uma informação
 * PUT    => alterar uma informação
 * DELETE => remover um dado
 * PATCH  => alterar uma informação especifica
 */

app.get('/test', (request, response) => {
  // request  => entrando
  // response => saindo
  return response.send('ola nlw')
})

app.post('/test-post', (request, response) => {
  return response.send('ola, nwl metodo post')
})

app.listen(3000, () => console.log('server is running nlw'))
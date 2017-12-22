const fastify = require('fastify')()
 
fastify.register(require('fastify-react'))
 
fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.ready(() => {
  fastify.next('/hello')
  fastify.next('/about')
})
 
fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listenging on http://localhost:3000')
})
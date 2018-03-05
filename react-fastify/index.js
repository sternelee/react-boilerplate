const fastify = require('fastify')()
const Sequelize = require('sequelize')
const seq = require('./mysql')
 
fastify.register(require('fastify-react'))

const Users = seq.define('users', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(100)
}, {
  timestamps: false
})

Users.findAll().then(users => {
  users.map((user, id) => {
    console.log(user.get('name'))
  })
})
 
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
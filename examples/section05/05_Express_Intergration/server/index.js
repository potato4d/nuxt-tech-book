const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.set('port', port)
app.use('/api/', bodyParser.json())

app.get('/api/todos', (req, res) => {
  res.json({
    todos: [
      { id: 1, name: 'First Todo' },
      { id: 2, name: 'Second Task' },
      { id: 3, name: 'Third Task' }
    ]
  })
})

const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)
app.listen(port, host)

console.log(`Server listening on ${host}:${port}`)

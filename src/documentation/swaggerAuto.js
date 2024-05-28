import swaggerAutogen from 'swagger-autogen'

// const doc = {
//   info: {
//     title: 'My API',
//     description: 'Description'
//   },
//   host: 'localhost:3000'
// }

const doc = {
  info: {
    version: '1.0.0', // by default: '1.0.0'
    title: 'Login Fullstack', // by default: 'REST API'
    description: 'Desarrollando un sistema de Login con autenticacion JWT' // by default: ''
  },
  servers: [
    {
      url: 'localhost:5000', // by default: 'http://localhost:3000'
      description: 'Ruta base del proyecto local' // by default: ''
    },
    {
      url: 'https://github.com/JeanInoCruz/MPN4-Login-Backend.git',
      description: 'Ruta del proyecto en GitHub'
    }
    // { ... }
  ],
  tags: [ // by default: empty Array
    {
      name: '', // Tag name
      description: '' // Tag description
    }
    // { ... }
  ],
  components: {} // by default: empty object
}

const outputFile = './swagger-output.json'
const routes = ['./src/app.js']
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc)

import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import path from 'path'

const swaggerFilePath = path.resolve('./src/documentation/swagger-output.json')

const loadSwaggerFile = (filePath) => {
  try {
    const rawData = fs.readFileSync(filePath)
    return JSON.parse(rawData)
  } catch (error) {
    console.error('Error loading Swagger file:', error)
    return {}
  }
}

export const swaggerDocs = (app, port) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(loadSwaggerFile(swaggerFilePath)))

  console.log(
    `Docs are available on http://localhost:${port}/api/docs`
  )
}

export default swaggerDocs

import express from 'express'
import showRequests from './showRequests.js'
import superheroController from './superhero/superheroController.js'
import someDataController from './someData/someDataController.js'
import petsController from './pets/petsController.js'

import { disconnectDb } from './db.js'

const port = process.env.PORT || 3000
const app = express()

app.use(showRequests)
app.use(express.static('../public_html'))
app.use(express.json())

app.use('/api/superhero', superheroController)
app.use('/api/somedata', someDataController)
app.use('/api/pets', petsController)

const server = app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

server.on('close',() => {
    console.log('Closing mongo connection')
    disconnectDb()
})

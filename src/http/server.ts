import fastify from 'fastify'
import { prisma } from '../lib/prisma'
import { createPoll } from './routes/crate-poll'

const app = fastify()

app.register(createPoll)


const port = 3333
app.listen({port:port}).then(() => {
    console.log('running on port ' + port)
})
import fastify from 'fastify'
import { prisma } from '../lib/prisma'
import { createPoll } from './routes/create-polls'
import { getPoll } from './routes/get-poll'

const app = fastify()

app.register(createPoll)
app.register(getPoll)

const port = 3333
app.listen({port:port}).then(() => {
    console.log('running on port ' + port)
})
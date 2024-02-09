import fastify from 'fastify'
import { prisma } from '../lib/prisma'
import { createPoll } from './routes/create-polls'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie, {
    secret:'polls-app-nlw',
    hook:'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)



const port = 3333
app.listen({port:port}).then(() => {
    console.log('running on port ' + port)
})
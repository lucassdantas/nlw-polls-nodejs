import fastify from 'fastify'
import { createPoll } from './routes/create-polls'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'


const app = fastify()

app.register(cookie, {
    secret:'polls-app-nlw',
    hook:'onRequest',
})
app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)


const port = 3333
app.listen({port:port}).then(() => {
    console.log('running on port ' + port)
})
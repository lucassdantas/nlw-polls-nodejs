import fastify from 'fastify'
import {PrismaClient} from '@prisma/client'

import {z} from 'zod'

const app = fastify()
const prisma = new PrismaClient()


app.post('/polls', async (req, res) => {
    const createPollBody = z.object({
        title:z.string()
    })

    const {title} =  createPollBody.parse(req.body)

    const poll = await prisma.poll.create({
        data:{
            title,
        }
    })

    return res.status(201).send({pollId:poll.id})
})

const port = 3333
app.listen({port:port}).then(() => {
    console.log('running on port ' + port)
})
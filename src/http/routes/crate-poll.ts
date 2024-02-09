import fastify, { FastifyInstance } from 'fastify'

import {z} from 'zod'
import { prisma } from '../../lib/prisma'

const app = fastify()

export async function createPoll(app:FastifyInstance){
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
}

import { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance){
    app.get('/polls/:pollId/results', {websocket:true}, (connection, request) => {
        connection.socket.on('message', (message:string) => {
            connection.socket.send('Você enviou: ' + message)

            setTimeout(() => {
                connection.socket.send('oi')
            }, 2000)
            
        })
    })
}
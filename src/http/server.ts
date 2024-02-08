import fastify from 'fastify'


const app = fastify()

app.get('/hello', (req:any, res:any) => {
    res.send('<h1>oi</h1>')
})
app.listen({port:3333}).then(() => {
    console.log('running')
})
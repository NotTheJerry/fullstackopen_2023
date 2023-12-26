const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

morgan.token('content-value', (request) => JSON.stringify(request.body) )

app.use( morgan(':method :url :status :res[content-length] - :response-time ms :content-value', { skip: (req, res) => req.method !== 'POST' }))


let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
]

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`Phonebook has ${persons.length} people<br />${date.toString()}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person){
        return response.json(person)
    }

    response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person){
        persons = persons.filter(person => person.id !== id)
        return response.status(204).end()
    }

    response.status(404).end()
})


const idGenerator = () => {
    while(true){
        const random = Math.floor(Math.random() * 10)
        const statement = persons.find(person => person.id === random)
        if(!statement){
            return random
        }
    }
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name || !body.number){
        return response.json({ "error": "missing name or number" })
    }

    if(persons.find(person => person.name === body.name)){
        return response.json({ "error": "name must be unique" })
    }

    const newPerson = {
        id: idGenerator(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(newPerson)
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})
  
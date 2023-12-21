import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumero, setNewNumero ] = useState('')
  const [filtro, setFiltro] = useState('')

  const agregarPersona = (event) => {
    event.preventDefault()
    const nuevaPersona = {
      name: newName,
      number: newNumero
    }
    if(persons.find(person => person.name === newName)){
      return alert(`${newName} is already added to phonebook`)
    }
    setPersons(persons.concat(nuevaPersona))
    setNewName('')
    setNewNumero('')
  }

  const handleNuevoNombre = (event) => {
    setNewName(event.target.value)
  }

  const handleNuevoNumero = (event) => {
    setNewNumero(event.target.value)
  }

  const handleFiltro = (event) => {
    setFiltro(event.target.value)
  }

  const personsFiltrated = persons.filter(person => person.name.toUpperCase() === filtro.toUpperCase())
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtro={filtro} handleFiltro={handleFiltro} personsFiltrated={personsFiltrated}/>
      <h2>add a new</h2>
      <PersonForm agregarPersona={agregarPersona} 
      newName={newName} handleNuevoNombre={handleNuevoNombre} 
      newNumero={newNumero} handleNuevoNumero={handleNuevoNumero}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
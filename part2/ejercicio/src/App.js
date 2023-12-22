import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumero, setNewNumero ] = useState('')
  const [filtro, setFiltro] = useState('')

  const hook = () => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

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
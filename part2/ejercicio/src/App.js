import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pais from './components/PaisWithWeather'
import PaisWithWeather from './components/PaisWithWeather'


const App = () => {
  const [paises, setPaises] = useState([]) 
  const [filtro, setFiltro] = useState('')

  const hook = () => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      setPaises(response.data)
    })
  }

  useEffect(hook, [])

  const paisesFiltrados = paises.filter(pais => pais.name.common.toUpperCase().includes(filtro.toUpperCase()))
  
  const handleFiltro = (event) => {
    setFiltro(event.target.value)
  }

  const toggleInfo = (name) => {
    const pais = paises.find(pais => pais.name.common === name)
    const cambioPais = { ...pais, importancia: !pais.importancia }
    setPaises(paises.map(pais => pais.name.common !== name ? pais : cambioPais))
  }


  const mostrarPaises = () => {
    if(!filtro) {
      return (<div>You haven't typed anything</div>)
    }

    if(paisesFiltrados.length > 10){
      return (
        <div>
          Too many matches
        </div>
      )
    }

    if(paisesFiltrados.length > 1 && paisesFiltrados.length <=10){
      return paisesFiltrados.map(pais => {
          return (
            <div key={pais.name.common}>
              {pais.name.common + ' '}
              <button onClick={() => toggleInfo(pais.name.common) }>{pais.importancia ? 'show less' : 'show'}</button>
              {pais.importancia ? <Pais pais={pais}/> : ''}
            </div>
          )
        }
      )
    }

    if(paisesFiltrados.length === 1){
     return <PaisWithWeather pais={paisesFiltrados[0]} />
    }
    
  } //Fin funcion mostrarPaises

  return (
    <div>
      <div>find countries <input value={filtro} onChange={handleFiltro}/> </div> <br />
      {mostrarPaises()}
    </div>
  )
} //Fin componente App

export default App
import { useState, useEffect } from "react";
import axios from "axios";

const PaisWithWeather = ({pais}) => {

    const [clima, setClima] = useState(null)

    const hookClima = () => {
        console.log('Nueva peticion');
        axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${pais.capital}`)
        .then(response => {
          setClima(response.data)
        })
    }

    useEffect(hookClima, [pais.capital])
    const languages = Object.values(pais.languages)

    if (clima) {
      return (
        <div>
          <h1>{pais.name.common}</h1>
          <div>capital: {pais.capital}</div>
          <div>population: {pais.population}</div>
          <h3>languages</h3>
          <ul>{languages.map(language => (
            <li key={language}>{language}</li>
          ))}</ul>
          <img src={pais.flags.png} alt={"Imagen de la bandera de " + pais.name.common} />
          <h3>Weather in {pais.capital}</h3>
          <div>temperature: {clima.current.temperature}° Celcius degrees</div>
          <div>Description of weather -- {clima.current.weather_descriptions}</div>
          <div><img src={clima.current.weather_icons} alt={`${clima.current.weather_descriptions} icon`} /></div>
          <div>wind: {clima.current.wind_speed} mph direction {clima.current.wind_dir} miles per hour</div>
        </div>
      )
    }
    
  }

  export default PaisWithWeather
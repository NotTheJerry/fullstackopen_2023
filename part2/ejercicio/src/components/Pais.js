const Pais = ({pais}) => {

    const languages = Object.values(pais.languages)
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
        </div>
      )
    
  } 

  export default Pais


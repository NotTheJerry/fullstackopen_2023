import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const actualizarPersona = (id, nuevaPersona) => {
    const request = axios.put(`${baseUrl}/${id}`,nuevaPersona)
    return request.then(response => response.data )
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, createPerson, actualizarPersona, deletePerson }
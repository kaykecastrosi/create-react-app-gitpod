import axios from 'axios'

const api = axios.create({ baseURL: "https://colegiotiradentes-api.herokuapp.com/api/" })

export default api
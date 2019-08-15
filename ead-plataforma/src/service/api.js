import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://desafio.eadplataforma.com/api/1',
  headers: {'Authorization': '123456789'}
})

export default instance
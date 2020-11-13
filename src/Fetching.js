import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise1 = axios.get('http://localhost:3001/foo')
console.log(promise1)
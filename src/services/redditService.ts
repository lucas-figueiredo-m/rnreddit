import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.reddit.com/r/programming'
})

export default service

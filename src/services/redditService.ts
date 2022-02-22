import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.reddit.com/r/programming'
})

export enum RedditServices {
  Search = '/search.json',
  Hot = '/hot.json',
  New = '/new.json',
  Top = '/top.json'
}

export default service

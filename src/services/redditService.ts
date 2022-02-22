import axios from 'axios'
import { RedditListing } from 'types/RedditTypes'

const api = axios.create({
  baseURL: 'https://api.reddit.com/r/programming'
})

export enum RedditServices {
  Search = '/search.json',
  Hot = '/hot.json',
  New = '/new.json',
  Top = '/top.json'
}

const service = {
  getHotPosts: () => api.get<RedditListing>(RedditServices.Hot),
  getNewPosts: () => api.get<RedditListing>(RedditServices.New),
  getTopPosts: () => api.get<RedditListing>(RedditServices.Top),
  searchPosts: (q: string) => api.get<RedditListing>(RedditServices.Search, { params: { q } })
}

export default service

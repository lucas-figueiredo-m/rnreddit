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
  getHotPosts: (page: string | null) =>
    api.get<RedditListing>(RedditServices.Hot, page ? { params: { after: page } } : undefined),
  getNewPosts: (page: string | null) =>
    api.get<RedditListing>(RedditServices.New, page ? { params: { after: page } } : undefined),
  getTopPosts: (page: string | null) =>
    api.get<RedditListing>(RedditServices.Top, page ? { params: { after: page } } : undefined),
  searchPosts: (q: string, page: string | null) =>
    api.get<RedditListing>(RedditServices.Search, page ? { params: { after: page, q } } : { params: { q } })
}

export default service

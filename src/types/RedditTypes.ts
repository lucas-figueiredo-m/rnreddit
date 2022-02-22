export type RedditListing = {
  id: string
  name: string
  kind: 'Listing'
  data: RedditListingData
}

export type RedditPostData = {
  title: string
  author: string
  score: number
  num_comments: number
  created: number
  thumbnail: string
  url: string
}

export type RedditPost = {
  kind: 't3'
  data: RedditPostData
}

export type RedditListingData = {
  before: string
  after: string
  modhash: string
  children: RedditPost[]
}

// https://github.com/reddit-archive/reddit/wiki/JSON
// https://lumio.notion.site/Take-home-task-React-Native-a0999a92d08e4e6687f099c2186c26bf

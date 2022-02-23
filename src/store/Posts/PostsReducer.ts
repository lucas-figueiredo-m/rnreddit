import { createSlice } from '@reduxjs/toolkit'
import { RedditServices } from 'services/redditService'
import { RootState } from 'store'
import { RedditPost } from 'types/RedditTypes'
import { getHotPosts } from 'store/Posts'
import { getNewPosts, getTopPosts, getPostsBySearch } from './PostsThunks'

export interface PostState {
  searchHistory: string[]
  posts: RedditPost[]
  postTypeSelected: RedditServices
  loading: boolean
  nextPage: string | null
  lastSearch: string
  paging: boolean
}

const initialState: PostState = {
  searchHistory: [],
  posts: [],
  postTypeSelected: RedditServices.Hot,
  loading: true,
  nextPage: null,
  lastSearch: '',
  paging: false
}

export const PostsSlice = createSlice({
  name: '[POSTS]',
  initialState,
  reducers: {
    setPosts(state, { payload: { posts, paging } }: { payload: { posts: RedditPost[]; paging?: boolean } }) {
      state.posts = paging ? [...state.posts, ...posts] : posts
    },
    setPaging(state) {
      state.paging = true
    },
    setNextPage(state, { payload: { nextPage } }: { payload: { nextPage: string | null } }) {
      state.nextPage = nextPage
    },
    setPostType(state, { payload: { postTypeSelected } }: { payload: { postTypeSelected: RedditServices } }) {
      state.postTypeSelected = postTypeSelected
    },
    addEntryToHistory(state, { payload: { newEntry } }: { payload: { newEntry: string } }) {
      state.lastSearch = newEntry
      const item = state.searchHistory.find(item => item === newEntry)
      if (item) {
        const temp = [...state.searchHistory].filter(history => history !== newEntry)
        console.log('temp: ', temp)
        state.searchHistory = [newEntry, ...temp]
        return
      }
      if (state.searchHistory.length === 10) {
        state.searchHistory = [newEntry, ...state.searchHistory.slice(0, 9)]
        return
      }

      state.searchHistory = [newEntry, ...state.searchHistory]
    }
  },
  extraReducers: builder => {
    builder.addCase(getHotPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getHotPosts.fulfilled, state => {
      state.loading = false
      state.paging = false
    })
    builder.addCase(getNewPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getNewPosts.fulfilled, state => {
      state.loading = false
      state.paging = false
    })
    builder.addCase(getTopPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getTopPosts.fulfilled, state => {
      state.loading = false
      state.paging = false
    })
    builder.addCase(getPostsBySearch.pending, state => {
      state.loading = true
    })
    builder.addCase(getPostsBySearch.fulfilled, state => {
      state.loading = false
      state.paging = false
    })
  }
})

export const posts = (state: RootState) => state.posts

export const PostsActions = { ...PostsSlice.actions }

export default PostsSlice.reducer

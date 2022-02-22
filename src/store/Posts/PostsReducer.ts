import { createSlice } from '@reduxjs/toolkit'
import { RedditServices } from 'services/redditService'
import { RootState } from 'store'
import { RedditPost } from 'types/RedditTypes'
import { getHotPosts } from 'store/Posts'
import { getNewPosts, getTopPosts } from './PostsThunks'

interface SearchState {
  searchHistory: string[]
  posts: RedditPost[]
  postTypeSelected: RedditServices
  loading: boolean
}

const initialState: SearchState = {
  searchHistory: [],
  posts: [],
  postTypeSelected: RedditServices.Hot,
  loading: true
}

export const PostsSlice = createSlice({
  name: '[POSTS]',
  initialState,
  reducers: {
    setPosts(state, { payload: { posts } }: { payload: { posts: RedditPost[] } }) {
      state.posts = posts
    },
    setPostType(state, { payload: { postTypeSelected } }: { payload: { postTypeSelected: RedditServices } }) {
      state.postTypeSelected = postTypeSelected
    },
    addEntryToHistory(state, { payload: { newEntry } }: { payload: { newEntry: string } }) {
      const itemIndex = state.searchHistory.findIndex(item => item === newEntry)
      if (itemIndex > 0) {
        const temp = [...state.searchHistory].splice(itemIndex)
        state.searchHistory = [...temp, newEntry]
        return
      }
      if (state.searchHistory.length > 10) {
        state.searchHistory = [...state.searchHistory.slice(0, 9), newEntry]
        return
      }

      state.searchHistory = [...state.searchHistory, newEntry]
    }
  },
  extraReducers: builder => {
    builder.addCase(getHotPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getHotPosts.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(getNewPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getNewPosts.fulfilled, state => {
      state.loading = false
    })
    builder.addCase(getTopPosts.pending, state => {
      state.loading = true
    })
    builder.addCase(getTopPosts.fulfilled, state => {
      state.loading = false
    })
  }
})

export const posts = (state: RootState) => state.posts

export const PostsActions = { ...PostsSlice.actions }

export default PostsSlice.reducer

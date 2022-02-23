import { createAsyncThunk } from '@reduxjs/toolkit'
import { PersistedState } from 'redux-persist/es/types'
import reddit, { RedditServices } from 'services/redditService'
import { PostsActions, PostState } from '.'

type PostStateThunk = {
  state: PersistedState & { posts: PostState }
}

export const getHotPosts = createAsyncThunk<void, boolean | undefined, PostStateThunk>(
  '[POSTS] Gets hot posts',
  async (paging, { dispatch, getState }) => {
    const state = getState()
    dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.Hot }))
    const res = await reddit.getHotPosts(paging ? state.posts.nextPage : null)
    dispatch(PostsActions.setPosts({ posts: res.data.data.children, paging }))
    dispatch(PostsActions.setNextPage({ nextPage: res.data.data.after }))
  }
)

export const getNewPosts = createAsyncThunk<void, boolean | undefined, PostStateThunk>(
  '[POSTS] Gets new posts',
  async (paging, { dispatch, getState }) => {
    const state = getState()
    dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.New }))
    const res = await reddit.getNewPosts(paging ? state.posts.nextPage : null)
    dispatch(PostsActions.setPosts({ posts: res.data.data.children, paging }))
    dispatch(PostsActions.setNextPage({ nextPage: res.data.data.after }))
  }
)

export const getTopPosts = createAsyncThunk<void, boolean | undefined, PostStateThunk>(
  '[POSTS] Gets top posts',
  async (paging, { dispatch, getState }) => {
    const state = getState()
    dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.Top }))
    const res = await reddit.getTopPosts(paging ? state.posts.nextPage : null)
    dispatch(PostsActions.setPosts({ posts: res.data.data.children, paging }))
    dispatch(PostsActions.setNextPage({ nextPage: res.data.data.after }))
  }
)

type SearchPosts = {
  search: string
  paging?: boolean
}

export const getPostsBySearch = createAsyncThunk<void, SearchPosts, PostStateThunk>(
  '[POSTS] Gets posts by searched term',
  async ({ search, paging }, { dispatch, getState }) => {
    const state = getState()
    dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.Search }))
    dispatch(PostsActions.addEntryToHistory({ newEntry: search }))
    const res = await reddit.searchPosts(search, paging ? state.posts.nextPage : null)
    dispatch(PostsActions.setPosts({ posts: res.data.data.children, paging }))
    dispatch(PostsActions.setNextPage({ nextPage: res.data.data.after }))
  }
)

export const getNextPage = createAsyncThunk<void, void, PostStateThunk>(
  '[POSTS] Gets next page from a given list',
  async (_, { dispatch, getState }) => {
    const state = getState()

    if (!state.posts.nextPage) return

    dispatch(PostsActions.setPaging())

    const reqs = {
      [RedditServices.Hot]: dispatch(getHotPosts(true)),
      [RedditServices.New]: dispatch(getNewPosts(true)),
      [RedditServices.Top]: dispatch(getTopPosts(true)),
      [RedditServices.Search]: dispatch(getPostsBySearch({ search: state.posts.lastSearch, paging: true }))
    }

    reqs[state.posts.postTypeSelected]
  }
)

export const PostsThunks = {
  getHotPosts,
  getNewPosts,
  getTopPosts,
  getPostsBySearch,
  getNextPage
}

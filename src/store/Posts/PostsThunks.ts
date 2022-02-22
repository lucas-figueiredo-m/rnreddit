import { createAsyncThunk } from '@reduxjs/toolkit'
import reddit, { RedditServices } from 'services/redditService'
import { PostsActions } from '.'

export const getHotPosts = createAsyncThunk('[POSTS] Gets hot posts', async (_, { dispatch }) => {
  dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.Hot }))
  const res = await reddit.getHotPosts()
  dispatch(PostsActions.setPosts({ posts: res.data.data.children }))
})

export const getNewPosts = createAsyncThunk('[POSTS] Gets new posts', async (_, { dispatch }) => {
  dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.New }))
  const res = await reddit.getNewPosts()
  dispatch(PostsActions.setPosts({ posts: res.data.data.children }))
})

export const getTopPosts = createAsyncThunk('[POSTS] Gets top posts', async (_, { dispatch }) => {
  dispatch(PostsActions.setPostType({ postTypeSelected: RedditServices.Top }))
  const res = await reddit.getTopPosts()
  dispatch(PostsActions.setPosts({ posts: res.data.data.children }))
})

export const PostsThunks = {
  getHotPosts,
  getNewPosts,
  getTopPosts
}

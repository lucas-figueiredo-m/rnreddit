import { createAsyncThunk } from '@reduxjs/toolkit'
import reddit from 'services/redditService'

const search = createAsyncThunk('[SEARCH] Searches a post', async (_, { dispatch }) => {
  await reddit.get('')
})

export const SearchThunks = {
  search
}

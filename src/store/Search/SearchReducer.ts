import { createSlice } from '@reduxjs/toolkit'

interface SearchState {
  history: string[]
}

const initialState: SearchState = {
  history: []
}

export const SearchSlice = createSlice({
  name: '[SEARCH]',
  initialState,
  reducers: {
    addEntryToHistory(state, { payload: { newEntry } }: { payload: { newEntry: string } }) {
      const itemIndex = state.history.findIndex(item => item === newEntry)
      if (itemIndex > 0) {
        const temp = [...state.history].splice(itemIndex)
        state.history = [...temp, newEntry]
        return
      }
      if (state.history.length > 10) {
        state.history = [...state.history.slice(0, 9), newEntry]
        return
      }

      state.history = [...state.history, newEntry]
    }
  }
})

export default SearchSlice.reducer

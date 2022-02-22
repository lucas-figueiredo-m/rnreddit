import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import PostsReducer from 'store/Posts/PostsReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1
}

const combinedReducers = combineReducers({
  posts: PostsReducer
})

const store = configureStore({
  reducer: persistReducer(persistConfig, combinedReducers),
  middleware: defaultMiddleware => {
    return defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default
    //   middlewares.push(createDebugger())
    // }

    // return middlewares
  }
})

export type RootState = ReturnType<typeof combinedReducers>

export const persistor = persistStore(store)

export default store

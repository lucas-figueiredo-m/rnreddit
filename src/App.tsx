import Router from 'navigation/Router'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from 'store'
import { Colors } from 'theme'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='dark-content' translucent backgroundColor={Colors.Transparent} />
        <Router />
      </PersistGate>
    </Provider>
  )
}

export default App

import Router from 'navigation/Router'
import React from 'react'
import { StatusBar } from 'react-native'
import { Colors } from 'theme'

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' translucent backgroundColor={Colors.Transparent} />
      <Router />
    </>
  )
}

export default App

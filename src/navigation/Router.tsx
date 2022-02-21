import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PostListScreen from 'screens/PostListScreen/PostListScreen'
import SplashScreen from 'screens/SplashScreen/SplashScreen'
import { MainRoutes, MainStackParams } from './types/MainStackTypes'

const Stack = createNativeStackNavigator<MainStackParams>()

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={MainRoutes.Splash} component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name={MainRoutes.PostList} component={PostListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import PostDetailScreen from 'screens/PostDetailScreen/PostDetailScreen'
import PostListScreen from 'screens/PostListScreen/PostListScreen'
import SplashScreen from 'screens/SplashScreen/SplashScreen'
import { MainRoutes, MainStackParams } from 'navigation/types/MainStackTypes'
import { Header } from './components/Header/Header'

const Stack = createNativeStackNavigator<MainStackParams>()

const Router: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={MainRoutes.Splash} component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name={MainRoutes.PostList} component={PostListScreen} options={{ header: props => <Header /> }} />
      <Stack.Screen name={MainRoutes.PostDetail} component={PostDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router

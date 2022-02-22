import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum MainRoutes {
  Splash = 'Splash',
  PostList = 'PostList',
  PostDetail = 'PostDetail'
}

export type MainStackParams = {
  [MainRoutes.Splash]: undefined
  [MainRoutes.PostList]: undefined
  [MainRoutes.PostDetail]: { url: string }
}

export type MainStackProps<T extends keyof MainStackParams> = NativeStackNavigationProp<MainStackParams, T>
export type MainStackRoute<T extends keyof MainStackParams> = RouteProp<MainStackParams, T>

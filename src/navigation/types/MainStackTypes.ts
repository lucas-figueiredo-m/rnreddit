import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum MainRoutes {
  Splash = 'Splash',
  PostList = 'PostList',
  PostDetail = 'PostDetail'
}

export type MainStackParams = {
  [MainRoutes.Splash]: undefined
  [MainRoutes.PostList]: undefined
  [MainRoutes.PostDetail]: undefined
}

export type MainStackProps<T extends keyof MainStackParams> = NativeStackNavigationProp<MainStackParams, T>

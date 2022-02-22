import { useRoute } from '@react-navigation/native'
import useTheme from 'hooks/useTheme'
import { MainRoutes, MainStackRoute } from 'navigation/types/MainStackTypes'
import React from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'

const PostDetailScreen: React.FC = () => {
  const {
    params: { url }
  } = useRoute<MainStackRoute<MainRoutes.PostDetail>>()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={Layout.sizes.fullSize}>
      <WebView source={{ uri: url }} />
    </SafeAreaView>
  )
}
export default PostDetailScreen

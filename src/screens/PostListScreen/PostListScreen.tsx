import { ListSpacer } from 'components/ListSpacer/ListSpacer'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { useEffect } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { posts, PostsThunks } from 'store/Posts'
import { Colors } from 'theme'
import { PostCard } from './components/PostCard/PostCard'

const PostListScreen: React.FC = () => {
  const dispatch = useDispatch()
  const postlist = useSelector(posts)
  const { Layout } = useTheme()

  const getPosts = async () => {
    dispatch(PostsThunks.getHotPosts())
  }

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (postlist.loading) {
    return (
      <View style={Layout.sizes.fillCenter}>
        <ActivityIndicator size='large' color={Colors.Primary} />
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={postlist.posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <PostCard {...item.data} />}
        ItemSeparatorComponent={() => <ListSpacer />}
      />
    </SafeAreaView>
  )
}
export default PostListScreen

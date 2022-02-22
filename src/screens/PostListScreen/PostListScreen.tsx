import { ListSpacer } from 'components/ListSpacer/ListSpacer'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import reddit from 'services/redditService'
import { RedditListing, RedditPost } from 'types/RedditTypes'
import { PostCard } from './components/PostCard/PostCard'

const PostListScreen: React.FC = () => {
  const [posts, setPosts] = useState<RedditPost[]>([])
  const getPosts = async () => {
    try {
      const res = await reddit.get<RedditListing>('/hot.json')
      setPosts(res.data.data.children)
      console.log('res: ', res.data)
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <PostCard {...item.data} />}
        ItemSeparatorComponent={() => <ListSpacer />}
      />
    </SafeAreaView>
  )
}
export default PostListScreen

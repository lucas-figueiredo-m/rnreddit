import React from 'react'
import { View } from 'react-native'
import useTheme from 'hooks/useTheme'
import { SelectionButton } from '../SelectionButton/SelectionButton'
import star from 'assets/icons/star.svg'
import fire from 'assets/icons/fire.svg'
import clock from 'assets/icons/clock.svg'
import { useDispatch, useSelector } from 'react-redux'
import { posts, PostsThunks } from 'store/Posts'
import { RedditServices } from 'services/redditService'

export const SelectionBar: React.FC = () => {
  const { Layout } = useTheme()
  const { postTypeSelected: type } = useSelector(posts)
  const dispatch = useDispatch()
  return (
    <View style={[Layout.rows.verticalCenter, Layout.justify.spaceAround]}>
      <SelectionButton
        isSelected={type === RedditServices.Hot}
        label='Hot'
        icon={fire}
        onPress={() => dispatch(PostsThunks.getHotPosts())}
      />
      <SelectionButton
        isSelected={type === RedditServices.New}
        label='New'
        icon={clock}
        onPress={() => dispatch(PostsThunks.getNewPosts())}
      />
      <SelectionButton
        isSelected={type === RedditServices.Top}
        label='Top'
        icon={star}
        onPress={() => dispatch(PostsThunks.getTopPosts())}
      />
    </View>
  )
}

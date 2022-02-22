import Label from 'components/Label/Label'
import { SVG } from 'components/SVG/SVG'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { RedditPostData } from 'types/RedditTypes'
import { transformScore } from 'utils/scoreCount'
import { PostCardImage } from '../PostCardImage/PostCardImage'

import comments from 'assets/icons/message-circle.svg'
import { Colors } from 'theme'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'
import { MainRoutes, MainStackProps } from 'navigation/types/MainStackTypes'

const styles = StyleSheet.create({
  background: { backgroundColor: Colors.White }
})

export const PostCard: React.FC<RedditPostData> = ({ title, author, score, num_comments, created, thumbnail, url }) => {
  const { Layout, Spacing, Font } = useTheme()
  const { navigate } = useNavigation<MainStackProps<MainRoutes.PostList>>()
  return (
    <Pressable
      onPress={() => navigate(MainRoutes.PostDetail, { url })}
      style={[Layout.direction.row, Spacing.paddings.all.sm, Layout.sizes.fullWidth, styles.background]}
    >
      <PostCardImage imageUri={thumbnail} />
      <View style={[Layout.justify.spaceBetween, Spacing.margins.left.sm, Layout.sizes.fill]}>
        <Label.H3 style={Font.alignment.right}>{format(created * 1000, 'LLL do, yyyy')}</Label.H3>
        <Label.P3 style={Spacing.margins.vertical.xs}>{title}</Label.P3>
        <View style={[Layout.rows.verticalCenterBetween]}>
          <Label.P3 style={Layout.sizes.fill}>{author}</Label.P3>
          <Label.H3 style={Spacing.margins.right.sm}>{transformScore(score)}</Label.H3>
          <View style={Layout.rows.verticalCenter}>
            <SVG xml={comments} color={Colors.Black} />
            <Label.H3>{num_comments}</Label.H3>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

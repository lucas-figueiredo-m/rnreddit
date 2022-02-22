import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SVG } from 'components/SVG/SVG'
import reddit from 'assets/icons/logo-reddit.svg'
import useTheme from 'hooks/useTheme'
import { Colors } from 'theme'

interface Props {
  imageUri: string
}

const IMAGE_SIZE = 90
const LOGO_SIZE = IMAGE_SIZE / 2

export const PostCardImage: React.FC<Props> = ({ imageUri }) => {
  const { Layout } = useTheme()
  if (imageUri === '') {
    return (
      <View style={[styles.background, Layout.columns.horizontalCenter]}>
        <SVG xml={reddit} color={Colors.White} stroke={Colors.White} width={LOGO_SIZE} height={LOGO_SIZE} />
      </View>
    )
  }

  return <></>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.Primary,
    borderRadius: 5,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
  }
})

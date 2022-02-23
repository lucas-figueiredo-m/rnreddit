import useTheme from 'hooks/useTheme'
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from 'theme'

interface Props {
  loading: boolean
}

export const Loader: React.FC<Props> = ({ loading }) => {
  const { Layout, Spacing } = useTheme()

  if (loading) {
    return (
      <View style={[Layout.sizes.fullWidth, Layout.alignment.center, Spacing.paddings.vertical.md]}>
        <ActivityIndicator size='large' color={Colors.Primary} />
      </View>
    )
  }

  return <></>
}

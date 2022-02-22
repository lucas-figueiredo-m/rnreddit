import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Colors } from 'theme'
import { SelectionBar } from '../SelectionBar/SelectionBar'

export const Header: React.FC<NativeStackHeaderProps> = () => {
  const { Layout } = useTheme()
  return (
    <View style={[styles.root]}>
      <SafeAreaView style={[Layout.sizes.fullWidth, styles.header]} />
      <SelectionBar />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Primary,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  },

  header: {
    height: 100
  }
})

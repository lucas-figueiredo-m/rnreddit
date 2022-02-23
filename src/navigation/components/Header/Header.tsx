import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import useTheme from 'hooks/useTheme'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { PostsThunks } from 'store/Posts'
import { Colors } from 'theme'
import { SearchBar } from '../SearchBar/SearchBar'
import { SelectionBar } from '../SelectionBar/SelectionBar'

export const Header: React.FC<NativeStackHeaderProps> = () => {
  const { Layout } = useTheme()
  const dispatch = useDispatch()
  const [search, setSearch] = useState<string>('')
  return (
    <View style={[styles.root]}>
      <SafeAreaView style={[Layout.sizes.fullWidth, styles.header]} />
      <SearchBar
        value={search}
        onSearchSubmit={text => dispatch(PostsThunks.getPostsBySearch(text))}
        onTextClear={() => setSearch('')}
        onChangeText={text => setSearch(text)}
      />
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

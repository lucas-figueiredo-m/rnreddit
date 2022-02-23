import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import useTheme from 'hooks/useTheme'
import React, { useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { posts, PostsThunks } from 'store/Posts'
import { Colors } from 'theme'
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchHistory } from '../SearchHistory/SearchHistory'
import { SelectionBar } from '../SelectionBar/SelectionBar'

export const Header: React.FC<NativeStackHeaderProps> = () => {
  const { Layout } = useTheme()
  const dispatch = useDispatch()
  const { searchHistory } = useSelector(posts)
  const [search, setSearch] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)

  const SearchRef = useRef<TextInput>(null)

  const onItemPress = (index: number) => {
    setSearch(searchHistory[index])
    SearchRef.current?.blur()
    // setFocused(false)
    dispatch(PostsThunks.getPostsBySearch({ search: searchHistory[index] }))
  }

  const onSubmitSearch = (text: string) => {
    dispatch(PostsThunks.getPostsBySearch({ search: text }))
    SearchRef.current?.blur()
  }

  return (
    <View style={[styles.root]}>
      <SafeAreaView style={[Layout.sizes.fullWidth, styles.header]} />
      <SearchBar
        value={search}
        ref={SearchRef}
        onSearchSubmit={onSubmitSearch}
        onTextClear={() => setSearch('')}
        onChangeText={text => setSearch(text)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {focused && <SearchHistory history={searchHistory} onItemPress={onItemPress} />}
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

import Label from 'components/Label/Label'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Colors } from 'theme'

interface Props {
  history: string[]
  onItemPress: (index: number) => void
}

const styles = StyleSheet.create({
  label: { color: Colors.White },
  container: { flexWrap: 'wrap' },
  button: {
    backgroundColor: Colors.DarkerPrimary,
    borderRadius: 5
  }
})

export const SearchHistory: React.FC<Props> = ({ history, onItemPress }) => {
  const { Spacing, Layout } = useTheme()
  return (
    <View style={[styles.container, Layout.direction.row, Spacing.paddings.all.sm]}>
      <Label.H2 style={styles.label}>Recent searches: </Label.H2>
      {history.map((historyItem, index) => (
        <Pressable
          key={index}
          onPress={() => onItemPress(index)}
          style={[Spacing.paddings.all.xs, styles.button, Spacing.margins.bottom.xs, Spacing.margins.right.xs]}
        >
          <Label.P3 style={styles.label}>{historyItem}</Label.P3>
        </Pressable>
      ))}
    </View>
  )
}

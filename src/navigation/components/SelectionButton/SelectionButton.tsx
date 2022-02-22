import Label from 'components/Label/Label'
import { SVG } from 'components/SVG/SVG'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Colors } from 'theme'

const styles = StyleSheet.create({
  background: { backgroundColor: Colors.Primary },
  fontSelected: { color: Colors.White },
  fontUnselected: { color: Colors.MediumGrey }
})

interface Props {
  onPress: () => void
  icon: string
  label: string
  isSelected: boolean
}

export const SelectionButton: React.FC<Props> = ({ icon, label, onPress, isSelected }) => {
  const { Layout, Spacing } = useTheme()

  return (
    <Pressable onPress={onPress} style={[Layout.rows.verticalCenter, styles.background, Spacing.paddings.vertical.sm]}>
      <SVG xml={icon} width={24} height={24} color={isSelected ? Colors.White : Colors.MediumGrey} />
      <Label.P1 style={[isSelected ? styles.fontSelected : styles.fontUnselected, Spacing.margins.left.xxs]}>
        {label}
      </Label.P1>
    </Pressable>
  )
}

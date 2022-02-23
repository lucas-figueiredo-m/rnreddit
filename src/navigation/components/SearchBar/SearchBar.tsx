import Label from 'components/Label/Label'
import useTheme from 'hooks/useTheme'
import React from 'react'
import { View, TextInput, TextInputProps, StyleSheet, Pressable } from 'react-native'
import { Colors } from 'theme'
import magnifyer from 'assets/icons/search.svg'
import x from 'assets/icons/x.svg'
import { SVG } from 'components/SVG/SVG'

interface Props extends TextInputProps {
  value: string
  onTextClear: () => void
  onSearchSubmit: (search: string) => void
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.White,
    borderRadius: 10
  },
  button: {
    backgroundColor: Colors.DarkerPrimary,
    borderRadius: 10
  },
  label: {
    color: Colors.White
  },
  close: {
    position: 'absolute',
    right: 5
  }
})

const hitSlop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10
}

export const SearchBar = React.forwardRef<TextInput, Props>((props, ref) => {
  const { Layout, Spacing, Font } = useTheme()

  return (
    <View style={[Layout.sizes.fullWidth, Spacing.paddings.horizontal.sm, Layout.direction.row]}>
      <View style={[Layout.sizes.fill, Layout.justify.center]}>
        <TextInput
          {...props}
          ref={ref}
          hitSlop={hitSlop}
          style={[
            styles.input,
            Font.family.Roboto,
            Font.size.lg,
            Spacing.paddings.vertical.xs,
            Spacing.paddings.horizontal.sm
          ]}
        />
        {props.value?.trim().length > 0 && (
          <Pressable hitSlop={hitSlop} style={[styles.close]} onPress={props.onTextClear}>
            <SVG xml={x} color={Colors.Black} />
          </Pressable>
        )}
      </View>
      {props.value?.trim().length > 0 && (
        <Pressable
          style={[styles.button, Layout.rows.verticalCenter, Spacing.paddings.horizontal.xs, Spacing.margins.left.sm]}
          onPress={() => props.onSearchSubmit(props.value.trim())}
        >
          <SVG xml={magnifyer} color={Colors.White} />
          <Label.H3 style={[Spacing.margins.left.xxs, styles.label]}>Search</Label.H3>
        </Pressable>
      )}
    </View>
  )
})

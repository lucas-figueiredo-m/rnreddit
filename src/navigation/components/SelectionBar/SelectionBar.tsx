import React from 'react'
import { View } from 'react-native'
import useTheme from 'hooks/useTheme'
import { SelectionButton } from '../SelectionButton/SelectionButton'
import star from 'assets/icons/star.svg'
import fire from 'assets/icons/fire.svg'
import clock from 'assets/icons/clock.svg'

export const SelectionBar: React.FC = () => {
  const { Layout } = useTheme()

  return (
    <View style={[Layout.rows.verticalCenter, Layout.justify.spaceAround]}>
      <SelectionButton label='Hot' icon={fire} onPress={() => null} />
      <SelectionButton label='New' icon={clock} onPress={() => null} />
      <SelectionButton label='Top' icon={star} onPress={() => null} />
    </View>
  )
}

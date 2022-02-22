import useTheme from 'hooks/useTheme'
import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

interface Props extends TextProps {
  style?: StyleProp<TextStyle>
}

const Label: React.FC<Props> = ({ style, children }) => {
  const { Font } = useTheme()

  return <Text style={[style, Font.family.Roboto]}>{children}</Text>
}

const Title: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.title, Font.weight.black, props.style]} />
}

const H1: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.xxl, Font.weight.bold, props.style]} />
}

const H2: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.xl, Font.weight.bold, props.style]} />
}

const H3: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.default, Font.weight.bold, props.style]} />
}

const H4: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.sm, Font.weight.semibold, props.style]} />
}

const P1: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.xl, Font.weight.regular, props.style]} />
}

const P2: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.lg, Font.weight.regular, props.style]} />
}

const P3: React.FC<Props> = props => {
  const { Font } = useTheme()
  return <Label {...props} style={[Font.size.default, Font.weight.regular, props.style]} />
}

export default {
  Title,
  H1,
  H2,
  H3,
  H4,
  P1,
  P2,
  P3
}

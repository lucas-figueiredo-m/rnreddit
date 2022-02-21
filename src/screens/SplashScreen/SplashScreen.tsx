import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import reddit from 'assets/icons/logo-reddit.svg'
import { SVG } from 'components/SVG/SVG'
import { Colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { MainRoutes, MainStackProps } from 'navigation/types/MainStackTypes'
import useTheme from 'hooks/useTheme'

const SplashScreen: React.FC = () => {
  const { reset } = useNavigation<MainStackProps<MainRoutes.Splash>>()
  const { Layout } = useTheme()
  useEffect(() => {
    setTimeout(() => {
      reset({
        index: 0,
        routes: [{ name: MainRoutes.PostList }]
      })
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaView style={[Layout.sizes.fillCenter, styles.background]}>
      {/* <Text>Hello World</Text> */}
      <SVG xml={reddit} color={Colors.White} stroke={Colors.White} width={150} height={150} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: { backgroundColor: Colors.Primary }
})

export default SplashScreen

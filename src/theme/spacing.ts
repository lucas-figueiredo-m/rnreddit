import { StyleSheet } from 'react-native'

export enum Metrics {
  none = 0,
  xxs = 4,
  xs = 8,
  sm = 14,
  md = 20,
  lg = 30,
  xl = 40,
  xxl = 60
}

export default {
  margins: {
    all: StyleSheet.create({
      none: { margin: Metrics.none },
      xxs: { margin: Metrics.xxs },
      xs: { margin: Metrics.xs },
      sm: { margin: Metrics.sm },
      md: { margin: Metrics.md },
      lg: { margin: Metrics.lg },
      xl: { margin: Metrics.xl },
      xxl: { margin: Metrics.xxl }
    }),
    vertical: StyleSheet.create({
      none: { marginVertical: Metrics.none },
      xxs: { marginVertical: Metrics.xxs },
      xs: { marginVertical: Metrics.xs },
      sm: { marginVertical: Metrics.sm },
      md: { marginVertical: Metrics.md },
      lg: { marginVertical: Metrics.lg },
      xl: { marginVertical: Metrics.xl },
      xxl: { marginVertical: Metrics.xxl }
    }),
    horizontal: StyleSheet.create({
      none: { marginHorizontal: Metrics.none },
      xxs: { marginHorizontal: Metrics.xxs },
      xs: { marginHorizontal: Metrics.xs },
      sm: { marginHorizontal: Metrics.sm },
      md: { marginHorizontal: Metrics.md },
      lg: { marginHorizontal: Metrics.lg },
      xl: { marginHorizontal: Metrics.xl },
      xxl: { marginHorizontal: Metrics.xxl }
    }),
    left: StyleSheet.create({
      none: { marginLeft: Metrics.none },
      xxs: { marginLeft: Metrics.xxs },
      xs: { marginLeft: Metrics.xs },
      sm: { marginLeft: Metrics.sm },
      md: { marginLeft: Metrics.md },
      lg: { marginLeft: Metrics.lg },
      xl: { marginLeft: Metrics.xl },
      xxl: { marginLeft: Metrics.xxl }
    }),
    right: StyleSheet.create({
      none: { marginRight: Metrics.none },
      xxs: { marginRight: Metrics.xxs },
      xs: { marginRight: Metrics.xs },
      sm: { marginRight: Metrics.sm },
      md: { marginRight: Metrics.md },
      lg: { marginRight: Metrics.lg },
      xl: { marginRight: Metrics.xl },
      xxl: { marginRight: Metrics.xxl }
    })
  },
  paddings: {
    all: StyleSheet.create({
      none: { padding: Metrics.none },
      xxs: { padding: Metrics.xxs },
      xs: { padding: Metrics.xs },
      sm: { padding: Metrics.sm },
      md: { padding: Metrics.md },
      lg: { padding: Metrics.lg },
      xl: { padding: Metrics.xl },
      xxl: { padding: Metrics.xxl }
    }),
    vertical: StyleSheet.create({
      none: { paddingVertical: Metrics.none },
      xxs: { paddingVertical: Metrics.xxs },
      xs: { paddingVertical: Metrics.xs },
      sm: { paddingVertical: Metrics.sm },
      md: { paddingVertical: Metrics.md },
      lg: { paddingVertical: Metrics.lg },
      xl: { paddingVertical: Metrics.xl },
      xxl: { paddingVertical: Metrics.xxl }
    }),
    horizontal: StyleSheet.create({
      none: { paddingHorizontal: Metrics.none },
      xxs: { paddingHorizontal: Metrics.xxs },
      xs: { paddingHorizontal: Metrics.xs },
      sm: { paddingHorizontal: Metrics.sm },
      md: { paddingHorizontal: Metrics.md },
      lg: { paddingHorizontal: Metrics.lg },
      xl: { paddingHorizontal: Metrics.xl },
      xxl: { paddingHorizontal: Metrics.xxl }
    })
  }
}

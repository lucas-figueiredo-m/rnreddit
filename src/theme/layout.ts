import { StyleSheet } from 'react-native'

export default {
  alignment: StyleSheet.create({
    center: { alignItems: 'center' },
    start: { alignItems: 'flex-start' },
    end: { alignItems: 'flex-end' }
  }),
  justify: StyleSheet.create({
    center: { justifyContent: 'center' },
    start: { justifyContent: 'flex-start' },
    end: { justifyContent: 'flex-end' },
    spaceAround: { justifyContent: 'space-around' },
    spaceBetween: { justifyContent: 'space-between' }
  }),
  direction: StyleSheet.create({
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    rowReverse: { flexDirection: 'row-reverse' },
    columnReverse: { flexDirection: 'column-reverse' }
  }),

  rows: StyleSheet.create({
    verticalCenter: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }),

  sizes: StyleSheet.create({
    fill: { flex: 1 },
    fillCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
}

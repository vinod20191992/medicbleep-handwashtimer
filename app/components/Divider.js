import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../config'

const { cellDivider } = colors

const Divider = () => {
  const { divider } = styles
  return <View style={divider} />
}

export default Divider

const styles = StyleSheet.create({
  divider: { height: 1, backgroundColor: cellDivider, marginLeft: 13 },
})

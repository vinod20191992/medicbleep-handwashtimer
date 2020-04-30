import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../config'

const ShiftView = ({ started }) => {
  const { onShiftViewStyle, emptyViewStyle } = styles
  if (started) {
    return (
      <View style={onShiftViewStyle}>
        <Text>Currently on shift and receiving reminders</Text>
      </View>
    )
  }
  return <View style={emptyViewStyle} />
}

export default ShiftView

const styles = StyleSheet.create({
  onShiftViewStyle: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 25,
    height: 35,
    backgroundColor: colors.navigationHeader,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyViewStyle: {
    height: 35,
    marginTop: 25,
  },
})

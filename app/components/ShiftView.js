import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../config'

const ShiftView = ({ started }) => {
  const { onShiftViewStyle, emptyViewStyle, textStyle } = styles
  if (started) {
    return (
      <View style={onShiftViewStyle}>
        <Text style={textStyle}>
          Currently on shift and receiving reminders
        </Text>
      </View>
    )
  }
  return <View style={emptyViewStyle} />
}

export default React.memo(ShiftView)

const styles = StyleSheet.create({
  onShiftViewStyle: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 25,
    height: 35,
    backgroundColor: colors.navigationHeader,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  emptyViewStyle: {
    height: 35,
    marginTop: 25,
  },
  textStyle: {
    color: colors.white,
  },
})

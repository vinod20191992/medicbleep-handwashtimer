import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../config'
import Divider from './Divider'

const InstructionCell = ({ item }) => {
  const {
    mainView,
    timeBgView,
    timeTextView,
    dayAndDateBgView,
    dateView,
    dayView,
  } = styles
  const { stepNumber, title, body } = item

  return (
    <View>
      <View style={mainView}>
        <View style={timeBgView}>
          <Text style={timeTextView}>{stepNumber}</Text>
        </View>
        <View style={dayAndDateBgView}>
          <Text style={dateView}>{title}</Text>
          <Text style={dayView}>{body}</Text>
        </View>
      </View>
    </View>
  )
}

export default InstructionCell

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeBgView: {
    width: 40,
    height: 40,
    marginLeft: 30,
    backgroundColor: colors.navigationHeader,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTextView: {
    fontSize: 15,
    color: colors.white,
  },
  dayAndDateBgView: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
  dayView: {
    fontSize: 15,
    color: colors.dateText,
    fontWeight: '500',
    marginBottom: 5,
  },
  dateView: {
    fontSize: 15,
    color: colors.dayText,
    fontWeight: '500',
    marginTop: 5,
  },
})

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../config'
import {
  timeIn24HrsFormat,
  getDayFromDate,
  convertDateIntoDateComponent,
} from '../utils/DateUtils'

const WashTimeCell = ({ item }) => {
  const {
    mainView,
    timeBgView,
    timeTextView,
    dayAndDateBgView,
    dateView,
    dayView,
    sepratorViewStyle,
  } = styles
  const { dateTime } = item

  return (
    <View>
      <View style={mainView}>
        <View style={timeBgView}>
          <Text style={timeTextView}>{timeIn24HrsFormat(dateTime)}</Text>
        </View>
        <View style={dayAndDateBgView}>
          <Text style={dateView}>{getDayFromDate(dateTime)}</Text>
          <Text style={dayView}>{convertDateIntoDateComponent(dateTime)}</Text>
        </View>
      </View>
      <View style={sepratorViewStyle} />
    </View>
  )
}

export default WashTimeCell

const styles = StyleSheet.create({
  mainView: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBgView: {
    width: 65,
    height: 40,
    marginLeft: 30,
    backgroundColor: colors.navigationHeaderColor,
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
    height: 50,
  },
  dayView: {
    fontSize: 15,
    color: colors.dayTextColor,
    fontWeight: '500',
  },
  dateView: {
    fontSize: 15,
    color: colors.dateTextColor,
    fontWeight: '500',
    marginTop: 5,
  },
  sepratorViewStyle: {
    marginLeft: 15,
    marginRight: 0,
    height: 1,
    backgroundColor: colors.separatorLineGrayColor,
  },
})

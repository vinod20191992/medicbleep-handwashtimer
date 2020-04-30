import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import WashTimeCell from '../components/WashTimeCell'
import { colors } from '../config'
import logo from '../assets/images/logo.png'
import ShiftView from '../components/ShiftView'
import { startShift } from '../state/Shift'
import { useDispatch } from 'react-redux'

export const HomeScreen = ({ started }) => {
  const dispatch = useDispatch()

  const startShiftButtonClicked = () => {
    dispatch(startShift(!started))
  }

  const keyExtractor = (item, index) => `${index}`

  const renderItem = ({ item, index }) => (
    <WashTimeCell item={item} index={index} key={`${index} ${item.id}`} />
  )

  const washButtonClicked = () => {}

  const {
    mainViewStyle,
    washButtonBgViewStyle,
    washButtonViewStyle,
    historyTextViewStyle,
    flatListStyle,
    startShiftButtonStyle,
    startShiftStyle,
  } = styles
  const startShiftText = started ? 'End Shift' : 'Start Shift'
  const washHistory = [{ id: '1', dateTime: Date.now() }]
  return (
    <SafeAreaView style={mainViewStyle}>
      <ShiftView started={started} />
      <View style={washButtonBgViewStyle}>
        <TouchableOpacity
          style={washButtonViewStyle}
          onPress={washButtonClicked}
        >
          <Image source={logo} />
        </TouchableOpacity>
      </View>
      <Text style={historyTextViewStyle}>HISTORY</Text>
      <FlatList
        style={flatListStyle}
        data={washHistory}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={startShiftButtonStyle}
        onPress={startShiftButtonClicked}
      >
        <Text style={startShiftStyle}>{startShiftText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const { started } = state.shiftReducer
  const storeObject = {}
  storeObject.started = started

  return storeObject
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  washButtonBgViewStyle: {
    marginTop: 25,
    height: 220,
    width: '100%',
    alignItems: 'center',
  },
  washButtonViewStyle: {
    marginTop: 10,
    height: 200,
    width: 200,
  },
  historyTextViewStyle: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 20,
    color: colors.dayText,
  },
  flatListStyle: {
    flex: 1,
  },
  startShiftButtonStyle: {
    height: 80,
    backgroundColor: colors.navigationHeader,
    alignItems: 'center',
  },
  startShiftStyle: {
    marginTop: 15,
    color: colors.white,
  },
})

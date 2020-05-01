import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import WashTimeCell from '../components/WashTimeCell'
import { colors, routes, vectorIcons } from '../config'
import ShiftView from '../components/ShiftView'
import { startShift } from '../state/Shift'
import { useSelector, useDispatch } from 'react-redux'
import { selectShiftStarted } from 'app/state/Shift'
import { getWashTimes } from '../state/WashTimeHistory'
import { TimerButton } from '../components'

export const HomeScreen = ({ navigation }) => {
  const { FontAwesome } = vectorIcons
  const { white } = colors
  const { settingButtonStyle } = styles
  navigation.setOptions({
    headerRight: () => (
      <View>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome
            style={settingButtonStyle}
            name={'gear'}
            size={25}
            color={white}
          />
        </TouchableOpacity>
      </View>
    ),
  })

  const dispatch = useDispatch()
  const started = useSelector(selectShiftStarted)
  const washTimes = useSelector(getWashTimes)

  const startShiftButtonClicked = () => {
    dispatch(startShift(!started))
  }

  const keyExtractor = (item, index) => `${index}`

  const renderItem = ({ item, index }) => (
    <WashTimeCell item={item} index={index} key={`${index}`} />
  )

  const washButtonClicked = () => {
    navigation.navigate({ name: routes.TIMER_SCREEN, key: routes.HOME_SCREEN })
  }

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
  return (
    <SafeAreaView style={mainViewStyle}>
      <ShiftView started={started} />
      <View style={washButtonBgViewStyle}>
        <TouchableOpacity
          style={washButtonViewStyle}
          onPress={washButtonClicked}
        >
          <TimerButton timerStart={false} image="gear" text="Wash" />
        </TouchableOpacity>
      </View>
      <Text style={historyTextViewStyle}>HISTORY</Text>
      <FlatList
        style={flatListStyle}
        data={washTimes}
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

export default HomeScreen

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    backgroundColor: colors.white,
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
  settingButtonStyle: { marginRight: 15 },
})

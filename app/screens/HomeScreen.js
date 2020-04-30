import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import WashTimeCell from '../components/WashTimeCell'
import { colors } from '../config'
import logo from '../assets/images/logo.png'

class HomeScreen extends Component {
  showShiftStartedView = () => {
    const { isShiftStarted } = this.props
    const { onShiftViewStyle, emptyViewStyle } = styles
    if (isShiftStarted) {
      return (
        <View style={onShiftViewStyle}>
          <Text>Currently on shift and receiving reminders</Text>
        </View>
      )
    }
    return <View style={emptyViewStyle} />
  }

  keyExtractor = (item, index) => `${index}`

  renderItem = ({ item, index }) => (
    <WashTimeCell item={item} index={index} key={`${index} ${item.id}`} />
  )

  render() {
    const {
      mainViewStyle,
      washButtonBgViewStyle,
      washButtonViewStyle,
      historyTextViewStyle,
      flatListStyle,
      startShiftButtonStyle,
      startShiftStyle,
    } = styles
    const { isShiftStarted } = this.props
    const startShiftText = isShiftStarted ? 'End Shift' : 'Start Shift'
    const washHistory = [{ id: '1', dateTime: Date.now() }]
    return (
      <View style={mainViewStyle}>
        {this.showShiftStartedView()}
        <View style={washButtonBgViewStyle}>
          <TouchableOpacity
            style={washButtonViewStyle}
            onPress={this.washButtonClicked}
          >
            <Image source={logo} />
          </TouchableOpacity>
        </View>
        <Text style={historyTextViewStyle}>HISTORY</Text>
        <FlatList
          style={flatListStyle}
          data={washHistory}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        <TouchableOpacity
          style={startShiftButtonStyle}
          onPress={this.startShift}
        >
          <Text style={startShiftStyle}>{startShiftText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  onShiftViewStyle: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 25,
    height: 35,
    backgroundColor: colors.navigationHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyViewStyle: {
    height: 35,
    marginTop: 25,
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
    marginBottom: 30,
    color: colors.dayTextColor,
  },
  flatListStyle: {
    flex: 1,
  },
  startShiftButtonStyle: {
    height: 120,
    backgroundColor: colors.navigationHeaderColor,
    alignItems: 'center',
  },
  startShiftStyle: {
    marginTop: 20,
    color: colors.white,
  },
})

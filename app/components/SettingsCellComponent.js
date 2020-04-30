import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Switch,
} from 'react-native'
import { colors } from '../config'

const { settingsCellTextColor, settingsCellBorderLineColor } = colors
const { width: screenWidth } = Dimensions.get('screen')

const SettingsCellComponent = ({
  cellText,
  onCellPress,
  onSwitchValueChange,
  isSwitchCellComponent,
}) => {
  const cellPressed = () => {
    if (onCellPress) {
      onCellPress()
    }
  }

  const switchValueChanged = () => {
    if (onSwitchValueChange) {
      onSwitchValueChange()
    }
  }

  const textComponent = () => {
    const { textContainerStyle, textStyle } = styles
    return (
      <View style={textContainerStyle}>
        <Text style={textStyle}>{cellText}</Text>
      </View>
    )
  }

  const switchOrArrowComponent = () => {
    const { switchOrArrowContainerStyle } = styles
    return (
      <View style={switchOrArrowContainerStyle}>
        {isSwitchCellComponent ? (
          <Switch onValueChange={switchValueChanged} />
        ) : null}
      </View>
    )
  }

  const textOnArrowCell = () => {
    const { touchableOpacityStyle } = styles
    return (
      <TouchableOpacity style={touchableOpacityStyle} onPress={cellPressed}>
        {textComponent()}
      </TouchableOpacity>
    )
  }

  const getCellComponent = () => {
    const { subContainerStyle } = styles
    return (
      <View style={subContainerStyle}>
        {isSwitchCellComponent ? textComponent() : textOnArrowCell()}
        {switchOrArrowComponent()}
      </View>
    )
  }

  const { containerStyle, borderLineStyle } = styles
  return (
    <View style={containerStyle}>
      {getCellComponent()}
      <View style={borderLineStyle} />
    </View>
  )
}

export default SettingsCellComponent

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 14,
    width: '100%',
    height: 45,
  },
  subContainerStyle: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
  },
  textContainerStyle: {
    justifyContent: 'center',
    marginLeft: 21,
    marginRight: 3,
    width: screenWidth - 102,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '400',
    color: settingsCellTextColor,
  },
  touchableOpacityStyle: {
    height: 45,
    justifyContent: 'center',
  },
  borderLineStyle: {
    height: 1,
    backgroundColor: settingsCellBorderLineColor,
    width: screenWidth - 13,
    marginLeft: 13,
  },
  switchOrArrowContainerStyle: {
    marginRight: 27,
    width: 51,
    justifyContent: 'center',
  },
})

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import { colors } from '../config'
import Icon from 'react-native-vector-icons/FontAwesome'
import DividerComponent from './DividerComponent'

const { cellTitle, dateText } = colors

const SettingsCellComponent = ({
  title,
  onCellPress,
  onSwitchValueChange,
  titleNumLines,
}) => {
  const cellPressed = () => (onCellPress ? onCellPress() : null)
  const switchValueChanged = (value) =>
    onSwitchValueChange ? onSwitchValueChange(value) : null

  const { titleText, wrapper, innerContent, icon } = styles
  return (
    <TouchableOpacity
      onPress={cellPressed}
      activeOpacity={cellPressed == null ? 1 : undefined}
    >
      <View style={wrapper}>
        <Text style={titleText} numberOfLines={titleNumLines}>
          {title}
        </Text>
        <View style={innerContent}>
          {onCellPress == null ? (
            <Switch onValueChange={switchValueChanged} />
          ) : (
            <Icon style={icon} name="chevron-right" />
          )}
        </View>
      </View>
      <DividerComponent />
    </TouchableOpacity>
  )
}

export default SettingsCellComponent

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '400',
    color: cellTitle,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 21,
    marginRight: 10,
  },
  wrapper: { flexDirection: 'row' },
  innerContent: { justifyContent: 'center', marginRight: 27 },
  icon: { color: dateText, fontWeight: '400', fontSize: 17 },
})

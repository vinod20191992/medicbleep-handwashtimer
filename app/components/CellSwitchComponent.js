import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native'
import { colors } from '../config'

const { settingsCellTextColor } = colors
const { width: screenWidth } = Dimensions.get('screen')

class CellSwitchComponent extends PureComponent {
  switchValueChanged = (value) => {
    const { onSwitchValueChange } = this.props;
    if (onSwitchValueChange) {
      onSwitchValueChange(value);
    }
  }

  render() {
    const {
      containerStyle,
      textContainerStyle,
      textStyle,
      switchContainerStyle,
    } = styles
    const { cellText } = this.props
    return (
      <View style={containerStyle}>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{cellText}</Text>
        </View>
        <View style={switchContainerStyle}>
          <Switch onValueChange={this.switchValueChanged} />
        </View>
      </View>
    )
  }
}

// propTypes for CellSwitchComponent
CellSwitchComponent.propTypes = {
  cellText: PropTypes.string.isRequired,
  onSwitchValueChange: PropTypes.func,
}

// defaultProps for CellSwitchComponent
CellSwitchComponent.defaultProps = {
  onSwitchValueChange: () => { },
}

export default CellSwitchComponent

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 14,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'red',
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
    backgroundColor: 'blue',
  },
  switchContainerStyle: {
    marginRight: 27,
    width: 51,
    justifyContent: 'center',
  },
})

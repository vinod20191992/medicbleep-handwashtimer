import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../config'

const { settingsCellTextColor } = colors

class CellArrowComponent extends PureComponent {
  cellPressed = () => {
    const { onCellPress } = this.props
    if (onCellPress) {
      onCellPress()
    }
  }

  render() {
    const { containerStyle, textStyle, touchableOpacityStyle } = styles
    const { cellText } = this.props
    return (
      <View style={containerStyle}>
        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={this.cellPressed}
        >
          <Text style={textStyle}>{cellText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// propTypes for CellArrowComponent
CellArrowComponent.propTypes = {
  cellText: PropTypes.string.isRequired,
  onCellPress: PropTypes.func,
}

// defaultProps for CellArrowComponent
CellArrowComponent.defaultProps = {
  onCellPress: () => { },
}

export default CellArrowComponent

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 14,
    width: '100%',
    height: 45,
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 8,
    fontWeight: '400',
    color: settingsCellTextColor,
  },
  touchableOpacityStyle: {
    height: 45,
    justifyContent: 'center',
  },
})

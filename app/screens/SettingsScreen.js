import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const SettingsScreen = ({ started }) => {
    const {} = styles;
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>i m settings screen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

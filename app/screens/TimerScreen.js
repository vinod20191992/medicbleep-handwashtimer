import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TimerComponent } from '../components'

const TimerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TimerComponent />
    </View>
  )
}

export default TimerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

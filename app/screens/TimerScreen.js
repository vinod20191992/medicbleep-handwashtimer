import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { TimerButton } from '../components'
import { colors } from '../config'

const TimerScreen = ({ navigation }) => {
  const { container, safeAreaStyle } = styles
  return (
    <SafeAreaView style={safeAreaStyle}>
      <View style={container}>
        <TimerButton />
      </View>
    </SafeAreaView>
  )
}
export default TimerScreen

const { white } = colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  safeAreaStyle: { flex: 1 },
})

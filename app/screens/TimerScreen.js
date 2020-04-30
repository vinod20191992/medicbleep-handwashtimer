import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { TimerComponent } from '../components'

const TimerScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TimerComponent />
      </View>
    </SafeAreaView>
  )
}

export default TimerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

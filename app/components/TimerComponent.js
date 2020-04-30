import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../config'

const TimerComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleView}>
        <Text style={styles.textSeconds}>18</Text>
        <Text style={styles.textSecondName}>Seconds</Text>
      </View>
    </View>
  )
}

export default TimerComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleView: {
    width: 150,
    height: 150,
    backgroundColor: colors.circleBackground,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSeconds: { fontSize: 25, color: colors.white },
  textSecondName: { color: colors.white, marginTop: 15, fontSize: 20 },
})

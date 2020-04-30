import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../config'

const TimerComponent = ({ navigation }) => {
  const [timer, setCounter] = useState(20)

  const timerCounter = () => setCounter(timer - 1)

  useEffect(() => {
    if (timer <= 0) {
      return
    }
    const id = setInterval(timerCounter, 1000)
    return () => clearInterval(id)
  }, [timer])

  console.log('timer new : ', timer)
  return (
    <View style={styles.container}>
      <View style={styles.circleView}>
        <Text style={styles.textSeconds}>{timer}</Text>
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

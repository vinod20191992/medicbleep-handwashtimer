import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const TimerComponent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Some Text</Text>
      </View>
    </SafeAreaView>
  )
}

export default TimerComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

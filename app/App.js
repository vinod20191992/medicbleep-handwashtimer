import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomeScreen from './screens/HomeScreen'

export default () => (
  // <View style={styles.container}>
  //   <Text>Hand Wash Timer</Text>
  // </View>
  <HomeScreen />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

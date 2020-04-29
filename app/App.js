import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './config'

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Hand Wash Timer</Text>
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

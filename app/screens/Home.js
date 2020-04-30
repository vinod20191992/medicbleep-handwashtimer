import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../config'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Some Text</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: 'capitalize',
    flex: 1,
  },
})

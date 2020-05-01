import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Logo = ({ started }) => {
  const { container } = styles
  return (
    <View style={container}>
      <Text>i m logo</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'red' },
})

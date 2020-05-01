import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { colors } from '../config'
import mbLogo from '../assets/images/mbLogo.png'

const { logoText } = colors

const MedicBleepLogo = ({ started }) => {
  const { container, text, image } = styles
  return (
    <View style={container}>
      <Text style={text}>Created for NHS by</Text>
      <Image source={mbLogo} style={image} />
    </View>
  )
}

export default MedicBleepLogo

const styles = StyleSheet.create({
  container: { marginBottom: 25, alignItems: 'center' },
  text: { fontSize: 17, fontWeight: '400', color: logoText, marginBottom: 14 },
  image: { width: 178, height: 40 },
})

import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import Logo from '../components/MedicBleepLogo'

const Settings = ({ started }) => {
  const { container, contentWrapper, logoWrapper } = styles
  return (
    <SafeAreaView style={container}>
      <View style={contentWrapper}>
        <Text>i m settings screen</Text>
      </View>
      <Logo />
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'red' },
  contentWrapper: { flex: 1, backgroundColor: 'blue' },
  logoWrapper: {},
})

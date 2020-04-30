import React, { Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { layoutStyle } = styles
    return (
      <SafeAreaView styles={layoutStyle}>
        <View>
          <Text>Splash Screen</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  layoutStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default Splash

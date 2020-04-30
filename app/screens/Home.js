import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native'
import { colors } from '../config'

const Home = ({ navigation }) => {
  const goToTimerScreen = () => {
    navigation
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ height: 50, width: 50, backgroundColor: 'red' }}
          onPress={goToTimerScreen}
        >
          <Text>GO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

import React from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { InstructionCell, TimerButton } from '../components'
import { colors } from '../config'

const TimerScreen = ({ navigation }) => {
  const data = [
    {
      stepNumber: 1,
      title: 'Wet your Hands',
      body:
        'With clean running water (warm or cold), turn off tap and apply soap',
    },
    {
      stepNumber: 2,
      title: 'Lather Your Hands',
      body:
        'Rub them together with soap, Lather the back of your hands, between your fingers and under your nails.',
    },
    {
      stepNumber: 3,
      title: 'Scrub',
      body: 'Scrub your hands for at least 20 seconds',
    },
    {
      stepNumber: 4,
      title: 'Rinse Well',
      body: 'Using running clean water',
    },
    {
      stepNumber: 5,
      title: 'Dry Your Hands',
      body: 'Using a clean towel or air dry them',
    },
  ]

  const keyExtractor = (item, index) => `${index}`

  const renderItem = ({ item, index }) => (
    <InstructionCell item={item} index={index} key={`${index}`} />
  )

  const { safeAreaStyle, container, flatListStyle } = styles
  return (
    <SafeAreaView style={safeAreaStyle}>
      <View style={container}>
        <TimerButton timerStart={true} image="thumbs-up" text="Seconds" />
        <FlatList
          style={flatListStyle}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}
export default TimerScreen

const { white } = colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  flatListStyle: {
    flex: 1,
  },
  safeAreaStyle: { flex: 1 },
})

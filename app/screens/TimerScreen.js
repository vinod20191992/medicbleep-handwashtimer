import React from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { TimerComponent, InstructionCell } from '../components'

const TimerScreen = ({ navigation }) => {
  const data = [
    {
      sNo: 1,
      title: 'Wet your Hands',
      body:
        'With clean running water (warm or cold), turn off tap and apply soap',
    },
    {
      sNo: 2,
      title: 'Lather Your Hands',
      body:
        'Rub them together with soap, Lather the back of your hands, between your fingers and under your nails.',
    },
    {
      sNo: 3,
      title: 'Scrub',
      body: 'Scrub your hands for at least 20 seconds',
    },
    {
      sNo: 4,
      title: 'Rinse Well',
      body: 'Using running clean water',
    },
    {
      sNo: 5,
      title: 'Dry Your Hands',
      body: 'Using a clean towel or air dry them',
    },
  ]

  const keyExtractor = (item, index) => `${index}`

  const renderItem = ({ item, index }) => (
    <InstructionCell item={item} index={index} key={`${index}`} />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TimerComponent />
        <FlatList
          style={styles.flatListStyle}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default TimerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListStyle: {
    flex: 1,
  },
})

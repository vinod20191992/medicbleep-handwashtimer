import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import config, { colors, vectorIcons } from '../config'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { useDispatch } from 'react-redux'
import { addWashTime } from '../state/WashTimeHistory'

const TimerButton = ({ navigation }) => {
  const dispatch = useDispatch()
  const timerDefault = config.timerDefault
  const [timer, setCounter] = useState(timerDefault)
  const [text, setText] = useState('Seconds')

  const timerCounter = () => setCounter(timer - 1)

  useEffect(() => {
    if (timer <= 0) {
      setText('Well Done')
      dispatch(addWashTime({ datetime: Date.now() }))
      return
    }
    const id = setInterval(timerCounter, 1000)
    return () => {
      clearInterval(id)
    }
  }, [timer])

  const fill = 100 - timer * 5

  const { FontAwesome } = vectorIcons
  const { white } = colors
  const {
    container,
    textSeconds,
    textSecondName,
    viewStyle,
    progressStyle,
  } = styles

  const renderTimer = () => {
    return (
      <View>
        {timer === 0 ? (
          <FontAwesome name={'thumbs-up'} size={30} color={white} />
        ) : (
          <Text style={textSeconds}>{timer}</Text>
        )}
      </View>
    )
  }

  return (
    <View style={container}>
      <AnimatedCircularProgress
        style={progressStyle}
        size={200}
        width={10}
        fill={fill}
        rotation={0}
        tintColor={colors.green}
        backgroundColor={colors.white}
      >
        {() => (
          <View style={viewStyle}>
            {renderTimer()}
            <Text style={textSecondName}>{text}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  )
}

export default TimerButton

const { white, circleBackground } = colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSeconds: { fontSize: 30, color: white },
  textSecondName: { color: white, marginTop: 15, fontSize: 18 },
  viewStyle: { alignItems: 'center', justifyContent: 'center' },
  progressStyle: {
    backgroundColor: circleBackground,
    borderRadius: 100,
  },
})

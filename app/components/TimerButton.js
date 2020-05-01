import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import config, { colors, vectorIcons } from '../config'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { useDispatch } from 'react-redux'
import { addWashTime } from '../state/WashTimeHistory'

const TimerButton = ({ timerStart, image, text }) => {
  const dispatch = useDispatch()
  const timerDefault = config.timerDefault
  const [timer, setCounter] = useState(timerDefault)
  const [bottomText, setBottomText] = useState(text)
  const [timerStartNew, setTimerStart] = useState(timerStart)

  const timerCounter = () => setCounter(timer - 1)

  useEffect(() => {
    if (timerStartNew) {
      if (timer <= 0) {
        setBottomText('Well Done')
        setTimerStart(false)
        dispatch(addWashTime({ datetime: Date.now() }))
        return
      }
      const id = setInterval(timerCounter, 1000)
      return () => {
        clearInterval(id)
      }
    }
  }, [timer])

  const fill = 100 - (timer * 100) / timerDefault

  const { FontAwesome } = vectorIcons
  const { white, green } = colors
  const {
    container,
    textSeconds,
    textSecondName,
    viewStyle,
    progressStyle,
    circularView,
  } = styles

  const renderCircularProgress = () => {
    return (
      <AnimatedCircularProgress
        style={progressStyle}
        size={200}
        width={10}
        fill={fill}
        rotation={0}
        tintColor={green}
        backgroundColor={white}
      >
        {() => (
          <View style={viewStyle}>
            <Text style={textSeconds}>{timer}</Text>
            <Text style={textSecondName}>{bottomText}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    )
  }

  const renderCircularView = () => {
    return (
      <View style={circularView}>
        <FontAwesome name={image} size={30} color={white} />
        <Text style={textSecondName}>{bottomText}</Text>
      </View>
    )
  }

  return (
    <View style={container}>
      {timerStartNew ? renderCircularProgress() : renderCircularView()}
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
  textSecondName: { color: white, marginTop: 25, fontSize: 18 },
  viewStyle: { alignItems: 'center', justifyContent: 'center' },
  progressStyle: {
    backgroundColor: circleBackground,
    borderRadius: 100,
  },
  circularView: {
    height: 190,
    width: 190,
    borderRadius: 100,
    backgroundColor: circleBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

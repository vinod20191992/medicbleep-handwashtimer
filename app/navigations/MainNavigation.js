import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home, TimerScreen } from '../screens'
import { routes, colors } from '../config'

const { HOME, TIMER_SCREEN } = routes
const { blackColor, themeColor } = colors

const Stack = createStackNavigator()

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => {
      return {
        headerTintColor: themeColor,
        headerTitleStyle: {
          color: blackColor,
        },
        headerBackTitle: 'Back',
      }
    }}
  >
    <Stack.Screen
      name={HOME}
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={TIMER_SCREEN}
      component={TimerScreen}
      options={{ title: 'Timer' }}
    />
  </Stack.Navigator>
)
export default MainNavigation

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home, TimerScreen, HomeScreen } from '../screens'
import { routes, colors } from '../config'

const { HOME, TIMER_SCREEN, HOME_SCREEN } = routes
const { green, white } = colors

const Stack = createStackNavigator()

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => {
      return {
        headerTintColor: white,
        headerTitleStyle: {
          color: white,
        },
        headerBackTitle: 'Back',
        headerStyle: { backgroundColor: green },
      }
    }}
  >
    <Stack.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{ title: 'Wash Timer' }}
    />
    <Stack.Screen
      name={TIMER_SCREEN}
      component={TimerScreen}
      options={{ title: 'Timer' }}
    />
  </Stack.Navigator>
)
export default MainNavigation

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen, SettingsScreen } from '../screens'
import { routes, colors } from '../config'

const { SETTINGS_SCREEN, TIMER_SCREEN, HOME_SCREEN } = routes
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
      name={SETTINGS_SCREEN}
      component={SettingsScreen}
      options={{ title: 'Settings' }}
    />
    <Stack.Screen
      name={TIMER_SCREEN}
      component={TimerScreen}
      options={{ title: 'Timer' }}
    />
  </Stack.Navigator>
)
export default MainNavigation

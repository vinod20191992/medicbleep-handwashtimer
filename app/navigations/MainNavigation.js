import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen, SettingsScreen } from '../screens'
import { routes, colors } from '../config'

const { HOME_SCREEN, SETTINGS_SCREEN } = routes
const { black, green } = colors

const Stack = createStackNavigator()

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => {
      return {
        headerTintColor: green,
        headerTitleStyle: {
          color: black,
        },
        headerBackTitle: 'Back',
      }
    }}
  >
    <Stack.Screen
      name={SETTINGS_SCREEN}
      component={SettingsScreen}
      options={{ title: 'Settings' }}
    />
    <Stack.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{ title: 'Wash Timer' }}
    />
  </Stack.Navigator>
)
export default MainNavigation

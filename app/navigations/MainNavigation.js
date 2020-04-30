import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { HomeScreen } from '../screens'
import { routes, colors } from '../config'

const { HOME_SCREEN } = routes
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
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{ title: 'Wash Timer' }}
    />
  </Stack.Navigator>
)
export default MainNavigation

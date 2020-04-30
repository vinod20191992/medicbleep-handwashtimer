import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home } from '../screens'
import { routes, colors } from '../config'

const { HOME } = routes
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
    <Stack.Screen name={HOME} component={Home} options={{ title: 'Home' }} />
  </Stack.Navigator>
)
export default MainNavigation

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home } from '../screens'
import { routes, colors } from '../config'

const { HOME } = routes
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
  </Stack.Navigator>
)
export default MainNavigation

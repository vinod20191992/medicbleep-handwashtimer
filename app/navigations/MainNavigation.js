import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Splash } from '../screens'
import { routes, colors } from '../config'

const { SPLASH } = routes
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
      name={SPLASH}
      component={Splash}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
export default MainNavigation

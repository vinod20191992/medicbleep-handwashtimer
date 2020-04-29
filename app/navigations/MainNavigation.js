import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Splash } from '../screens'
import { routes } from '../config'

const { SPLASH } = routes

const Stack = createStackNavigator()

const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={({ route, navigation }) => {
      return {
        headerTintColor: '#10A5DA',
        headerTitleStyle: {
          color: '#000000',
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

class AuthNavigation extends Component {
  static router = MainNavigation.router

  render() {
    return <MainNavigation />
  }
}

/**
 * propTypes for MainNavigation
 */
MainNavigation.propTypes = {
  //
}

/**
 * defaultProps for MainNavigation
 */
MainNavigation.defaultProps = {
  //
}
export default AuthNavigation

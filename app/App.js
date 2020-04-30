import React from 'react'
import { Provider } from 'react-redux'
import { store } from './config'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigations'

export default () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
)

import React from 'react'
import { Provider } from 'react-redux'
import config, { store } from './config'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigations'
import Storybook from '../storybook'

export default () => {
  if (config.storybookEnabled) {
    return <Storybook />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

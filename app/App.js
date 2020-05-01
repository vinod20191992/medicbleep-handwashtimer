import React from 'react'
import { Provider } from 'react-redux'
import config, { store, persistor } from './config'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigations'
import Storybook from '../storybook'

export default () => {
  if (config.storybookEnabled) {
    return <Storybook />
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

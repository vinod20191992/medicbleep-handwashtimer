import React from 'react'
import { getStorybookUI, configure, storiesOf } from '@storybook/react-native'

import './rn-addons'
import WashTimeCell from '../app/components/WashTimeCell'

export const item = {
  dateTime: Date.now(),
}

storiesOf('WashTimeCell', module).add('Story of WashTimeCell', () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <WashTimeCell item={item} />
))

// import stories
// configure(() => {
//   require('./stories')
// }, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('HandWashTimer', () => StorybookUIRoot)

export default StorybookUIRoot

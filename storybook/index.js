import React from 'react'
import { getStorybookUI, configure, storiesOf } from '@storybook/react-native'

import './rn-addons'
import WashTimeCell from '../app/components/WashTimeCell'

export const item = {
  dateTime: Date.now(),
}

storiesOf('WashTimeCell', module).add('WashTime', () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <WashTimeCell item={item} />
))

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot

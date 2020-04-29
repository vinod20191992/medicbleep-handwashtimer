// importing reactotron only in dev environment
if (__DEV__) {
    import('./reactotron-config').then(() => console.log('Reactotron Configured'));
}

import { AppRegistry } from 'react-native'
import App from './app/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

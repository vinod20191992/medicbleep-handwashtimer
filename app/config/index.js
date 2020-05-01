import local from './local'
import development from './development'
import production from './production'
import colors from './colors'
import store from './store'
import routes from './routes'
import vectorIcons from './vectorIcons'

let config = {
  colors,
  timerDefault: 20,
}

if (__DEV__) {
  config = {
    ...config,
    ...development,
    ...local,
  }
} else {
  config = {
    ...config,
    ...local,
    ...production,
  }
}

export { colors, routes, store, vectorIcons }
export default config

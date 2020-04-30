import local from './local'
import development from './development'
import production from './production'
import colors from './colors'
import store from './store'
import routes from './routes'

let config = {
  colors,
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

export { colors, store, routes }
export default config

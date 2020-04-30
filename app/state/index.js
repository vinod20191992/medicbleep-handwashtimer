import { combineReducers } from 'redux'
import StartShiftReducer from './StartShiftReducer'

const appReducer = combineReducers({
  startShiftReducer: StartShiftReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer

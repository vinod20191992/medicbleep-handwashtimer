import { combineReducers } from 'redux'
import Shift from './Shift'

const rootReducer = combineReducers({
  shiftReducer: Shift,
})
export default rootReducer

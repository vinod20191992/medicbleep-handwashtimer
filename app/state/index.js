import { combineReducers } from 'redux'
import Shift from './Shift'
import WashTimeHistory from './WashTimeHistory'

const rootReducer = combineReducers({
  shiftReducer: Shift,
  washTimeHistory: WashTimeHistory,
})
export default rootReducer

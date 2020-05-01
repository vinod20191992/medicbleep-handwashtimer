import { combineReducers } from 'redux'
import Shift from './Shift'
import WashTimeHistory from './WashTimeHistory'
import Settings from './Settings'

const rootReducer = combineReducers({
  shiftReducer: Shift,
  washTimeHistory: WashTimeHistory,
  settingsReducer: Settings,
})
export default rootReducer

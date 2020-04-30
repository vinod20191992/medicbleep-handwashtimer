import { START_SHIFT } from './types'

export default (state = { isShiftStarted: false }, action = {}) => {
  switch (action.type) {
    case START_SHIFT:
      return { ...state, isShiftStarted: action.payload }
    default:
      return state
  }
}

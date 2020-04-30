const initialState = {
  started: false,
}

// Types
export const START_SHIFT = 'start_shift'

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_SHIFT:
      return { ...state, started: action.payload }
    default:
      return state
  }
}

// Action creators
export const startShift = (isStartShift) => ({
  type: START_SHIFT,
  payload: isStartShift,
})

// Selectors
export const selectShiftStarted = (state) => state.shift.started

const initialState = {
  washTimes: [],
}

// Types
export const ADD_WASH_TIME = 'add_wash_time'

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_WASH_TIME:
      return { ...state, washTimes: [...state.washTimes, action.payload] }
    default:
      return state
  }
}

// Action creators
export const addWashTime = (washTime) => ({
  type: ADD_WASH_TIME,
  payload: washTime,
})

// Selectors
export const getWashTimes = (state) => state.washTimeHistory.washTimes

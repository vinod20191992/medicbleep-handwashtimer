const initialState = {
  isToStoreHistory: true,
  isToAllowShiftReminders: true,
}

// Types
export const STORE_HISTORY = 'store_history'
export const SHIFT_REMINDERS = 'shift_reminders'

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STORE_HISTORY:
      return { ...state, isToStoreHistory: action.payload }
    case SHIFT_REMINDERS:
      return { ...state, isToAllowShiftReminders: action.payload }
    default:
      return state
  }
}

// Action creators
export const storeHistory = (isStoreHistory) => ({
  type: STORE_HISTORY,
  payload: isStoreHistory,
})

export const shiftReminders = (isShiftRemindersAllowed) => ({
  type: SHIFT_REMINDERS,
  payload: isShiftRemindersAllowed,
})

// Selectors
export const selectStoreHistory = (state) =>
  state.settingsReducer.isToStoreHistory
export const selectShiftReminders = (state) =>
  state.settingsReducer.isToAllowShiftReminders

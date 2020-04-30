import { START_SHIFT } from './types'

const shartShift = (isStartShift) => ({
  type: START_SHIFT,
  payload: isStartShift,
})

export default { shartShift }

import moment from 'moment'

/**
 * Function will be used for converting a date in to 24 hours time
 *
  @param {} date : date to be converted in 24hrs time
 */
const timeIn24HrsFormat = (date) => moment(date).format('HH:mm')

/**
 * Function will return day from the date
 *
  @param {} date : date to be converted in 24hrs time
 */

const getDayFromDate = (date) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const passedDate = moment(date)
  const dayNum = passedDate.day()

  return weekday[dayNum]
}

/**
 * Function will return date in DD MMM YYYY format from the date
 *
  @param {} date : date to be converted in 24hrs time
 */
const convertDateIntoDateComponent = (date) =>
  moment(date).format('DD MMM YYYY')

export { timeIn24HrsFormat, getDayFromDate, convertDateIntoDateComponent }

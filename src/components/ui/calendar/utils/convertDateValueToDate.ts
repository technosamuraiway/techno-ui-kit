import { CalendarDate } from '@internationalized/date'

export function convertDateValueToDate(date: Date): CalendarDate {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

import { Calendar, DatePicker } from 'react-aria-components'

import { DateValue } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar } from '../baseCalendar/BaseCalendar'
import { CalendarVariant } from '../utils'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultSingleValue?: string
  isDateSelected: boolean
  onSingleChange?: (date: DateValue) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  valueSingle?: DateValue
  variant?: CalendarVariant
}
export const CalendarSingleDate = ({
  customError,
  dayNames,
  isDateSelected,
  onSingleChange,
  setCustomError,
  setIsDateSelected,
  valueSingle,
  variant,
}: IProps) => {
  const onSingleDateChangeHandler = (dateValue: DateValue | null) => {
    if (dateValue) {
      setCustomError('')
      setIsDateSelected(true)

      onSingleChange && onSingleChange(dateValue)
    } else {
      setCustomError('')
      setIsDateSelected(false)
    }
  }

  return (
    <DatePicker
      aria-label={'Date picker single'}
      className={s.datePicker}
      onChange={onSingleDateChangeHandler}
      value={valueSingle}
    >
      <BaseCalendar
        CalendarComponent={Calendar}
        calendarCellCN={s.calendarCellFocus}
        customError={customError}
        dayNames={dayNames}
        isDateSelected={isDateSelected}
        isSingle
        variant={variant}
      />
    </DatePicker>
  )
}

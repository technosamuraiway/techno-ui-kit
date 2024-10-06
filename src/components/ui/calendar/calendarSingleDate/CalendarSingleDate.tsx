import { Calendar, DatePicker } from 'react-aria-components'

import { DateValue } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar, VariantType } from '../baseCalendar/BaseCalendar'

interface IProps {
  customError?: string
  dayNames: string[]
  isDateSelected: boolean
  onDateChange?: (date: { end?: Date; start?: Date }) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  variant?: VariantType
}
export const CalendarSingleDate = ({
  customError,
  dayNames,
  isDateSelected,
  onDateChange,
  setCustomError,
  setIsDateSelected,
  variant,
}: IProps) => {
  const onSingleDateChangeHandler = (dateValue: DateValue) => {
    if (dateValue) {
      const selectedDate = new Date(dateValue.year, dateValue.month - 1, dateValue.day)

      if (!isNaN(selectedDate.getTime())) {
        setCustomError('')
        setIsDateSelected(true)
        if (onDateChange) {
          onDateChange({ start: selectedDate })
        }
      } else {
        setCustomError('')
      }
    } else {
      setCustomError('')
    }
  }

  return (
    <DatePicker
      aria-label={'Date picker single'}
      className={s.datePicker}
      onChange={onSingleDateChangeHandler}
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

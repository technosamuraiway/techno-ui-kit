import { Calendar, DatePicker } from 'react-aria-components'

import { DateValue } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar, VariantType } from '../baseCalendar/BaseCalendar'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultSingleValue?: string
  isDateSelected: boolean
  onSingleChange?: (date: Date) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  valueSingle?: DateValue
  variant?: VariantType
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
  const onSingleDateChangeHandler = (dateValue: DateValue) => {
    if (dateValue) {
      const selectedDate = new Date(dateValue.year, dateValue.month - 1, dateValue.day)

      setCustomError('')
      setIsDateSelected(true)

      onSingleChange && onSingleChange(selectedDate)
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

import { DateRangePicker, RangeCalendar } from 'react-aria-components'

import { DateValue } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar, VariantType } from '../baseCalendar/BaseCalendar'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultErrorMessage: string
  errorMessage?: string
  isDateSelected: boolean
  onDateChange?: (date: { end?: Date; start?: Date }) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  variant?: VariantType
}

export const CalendarRange = ({
  customError,
  dayNames,
  defaultErrorMessage,
  errorMessage,
  isDateSelected,
  onDateChange,
  setCustomError,
  setIsDateSelected,
  variant,
}: IProps) => {
  const onRangeDateChangeHandler = (range: { end: DateValue; start: DateValue }) => {
    const start = new Date(range.start.year, range.start.month - 1, range.start.day)
    const end = new Date(range.end.year, range.end.month - 1, range.end.day)

    if (start > end) {
      setCustomError(errorMessage || defaultErrorMessage)
    } else {
      setCustomError('')
      setIsDateSelected(true)
      if (onDateChange) {
        onDateChange({ end, start })
      }
    }
  }

  return (
    <DateRangePicker
      aria-label={'Date picker range'}
      className={s.datePicker}
      onChange={onRangeDateChangeHandler}
    >
      <BaseCalendar
        CalendarComponent={RangeCalendar}
        customError={customError}
        dayNames={dayNames}
        isDateSelected={isDateSelected}
        isSingle={false}
        variant={variant}
      />
    </DateRangePicker>
  )
}

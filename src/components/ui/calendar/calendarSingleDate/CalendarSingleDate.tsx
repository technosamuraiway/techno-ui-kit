import { Calendar, DatePicker } from 'react-aria-components'

import { DateValue as ReactDateValue } from '@react-types/datepicker'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar } from '../baseCalendar/BaseCalendar'
import { CalendarVariant } from '../utils'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultSingleValue?: string
  isDateSelected: boolean
  onSingleChange?: (date: ReactDateValue) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  valueSingle?: ReactDateValue
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
  const onSingleDateChangeHandler = (value: ReactDateValue | null) => {
    if (value) {
      setCustomError('')
      setIsDateSelected(true)
      onSingleChange && onSingleChange(value)
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

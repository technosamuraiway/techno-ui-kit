import { useEffect, useState } from 'react'
import { Calendar, DatePicker } from 'react-aria-components'

import { CalendarDate, DateValue, parseDate } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar, VariantType } from '../baseCalendar/BaseCalendar'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultSingleValue?: string
  isDateSelected: boolean
  onDateChange?: (date: { end?: Date; start?: Date }) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  variant?: VariantType
}
export const CalendarSingleDate = ({
  customError,
  dayNames,
  defaultSingleValue,
  isDateSelected,
  onDateChange,
  setCustomError,
  setIsDateSelected,
  variant,
}: IProps) => {
  const [currentDate, setCurrentDate] = useState<CalendarDate | undefined>(
    defaultSingleValue ? parseDate(defaultSingleValue) : undefined
  )

  useEffect(() => {
    if (defaultSingleValue) {
      const newDate = parseDate(defaultSingleValue)

      setCurrentDate(newDate)
    } else {
      setCurrentDate(undefined)
    }
  }, [defaultSingleValue])

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
      key={defaultSingleValue}
      onChange={onSingleDateChangeHandler}
      value={currentDate}
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

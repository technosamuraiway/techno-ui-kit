import { useEffect, useState } from 'react'
import { DateRangePicker, RangeCalendar } from 'react-aria-components'

import { CalendarDate, parseDate } from '@internationalized/date'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar, VariantType } from '../baseCalendar/BaseCalendar'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultErrorMessage: string
  defaultRangeValue?: { end: string; start: string }
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
  defaultRangeValue,
  errorMessage,
  isDateSelected,
  onDateChange,
  setCustomError,
  setIsDateSelected,
  variant,
}: IProps) => {
  const [value, setValue] = useState(() => {
    if (defaultRangeValue) {
      return {
        end: parseDate(defaultRangeValue.end),
        start: parseDate(defaultRangeValue.start),
      }
    }

    return undefined
  })

  useEffect(() => {
    if (defaultRangeValue && defaultRangeValue.start && defaultRangeValue.end) {
      setValue({
        end: parseDate(defaultRangeValue.end),
        start: parseDate(defaultRangeValue.start),
      })
    }
  }, [defaultRangeValue])

  const onRangeDateChangeHandler = (range: { end: CalendarDate; start: CalendarDate }) => {
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
    setValue(range)
  }

  return (
    <DateRangePicker
      aria-label={'Date picker range'}
      className={s.datePicker}
      onChange={onRangeDateChangeHandler}
      value={value}
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

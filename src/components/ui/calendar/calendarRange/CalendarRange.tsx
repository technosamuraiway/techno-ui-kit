import { DateRangePicker, RangeCalendar } from 'react-aria-components'

import { DateValue as ReactDateValue } from '@react-types/datepicker'

import s from '../baseCalendar/BaseCalendar.module.scss'

import { BaseCalendar } from '../baseCalendar/BaseCalendar'
import { CalendarVariant, RangeValue } from '../utils'

interface IProps {
  customError?: string
  dayNames: string[]
  defaultErrorMessage: string
  errorMessage?: string
  isDateSelected: boolean
  onRangeChange?: (date: { end: ReactDateValue; start: ReactDateValue }) => void
  setCustomError: (customError: string) => void
  setIsDateSelected: (isDateSelected: boolean) => void
  valueRange?: RangeValue<ReactDateValue>
  variant?: CalendarVariant
}

export const CalendarRange = ({
  customError,
  dayNames,
  defaultErrorMessage,
  errorMessage,
  isDateSelected,
  onRangeChange,
  setCustomError,
  setIsDateSelected,
  valueRange,
  variant,
}: IProps) => {
  const onRangeDateChangeHandler = (range: RangeValue<ReactDateValue>) => {
    if (range.start && range.end) {
      const start = range.start
      const end = range.end

      if (start.compare(end) > 0) {
        setCustomError(errorMessage || defaultErrorMessage)
      } else {
        setCustomError('')
        setIsDateSelected(true)

        onRangeChange && onRangeChange({ end, start })
      }
    } else {
      setCustomError(errorMessage || defaultErrorMessage)
    }
  }

  return (
    <DateRangePicker
      aria-label={'Date picker range'}
      className={s.datePicker}
      onChange={range => range && onRangeDateChangeHandler(range)}
      value={valueRange}
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

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { I18nProvider } from 'react-aria'

import { Typography } from '@/components'
import { DateValue as ReactDateValue } from '@react-types/datepicker'
import clsx from 'clsx'

import s from './baseCalendar/BaseCalendar.module.scss'

import { CalendarRange } from './calendarRange/CalendarRange'
import { CalendarSingleDate } from './calendarSingleDate/CalendarSingleDate'
import { CalendarVariant, RangeValue, locales } from './utils'

export type CalendarProps = {
  errorMessage?: string
  labelText?: string
  locale?: 'en' | 'ru'
  mode?: 'range' | 'single'
  onRangeChange?: (date: { end: ReactDateValue; start: ReactDateValue }) => void
  onSingleChange?: (date: ReactDateValue) => void
  valueRange?: RangeValue<ReactDateValue>
  valueSingle?: ReactDateValue
  variant?: CalendarVariant
} & ComponentPropsWithoutRef<'div'>

export const Calendar = forwardRef<ElementRef<'div'>, CalendarProps>(
  (
    {
      className,
      errorMessage,
      labelText,
      locale = 'ru',
      mode = 'range',
      onRangeChange,
      onSingleChange,
      valueRange,
      valueSingle,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const [isDateSelected, setIsDateSelected] = useState(false)
    const [customError, setCustomError] = useState('')

    const currentLocale = locales[locale]
    const dayNames = currentLocale.dayNames
    const defaultErrorMessage =
      mode === 'single'
        ? currentLocale.errorMessages.generalError
        : currentLocale.errorMessages.selectMonthError

    const onRangeChangeHandler = (date: { end: ReactDateValue; start: ReactDateValue }) => {
      setIsDateSelected(true)
      onRangeChange?.(date)
    }

    const onSingleChangeHandler = (date: ReactDateValue) => {
      setIsDateSelected(true)
      onSingleChange?.(date)
    }

    return (
      <I18nProvider locale={locale === 'en' ? 'en-US' : 'ru-RU'}>
        <div
          className={clsx(s.datePickerWrapper, s[variant], className, {
            [s['data-invalid']]: errorMessage || customError,
          })}
          ref={ref}
          {...rest}
        >
          <Typography className={s.labelColor} variant={'regular-text-14'}>
            {labelText}
          </Typography>
          {mode === 'range' ? (
            <CalendarRange
              customError={customError}
              dayNames={dayNames}
              defaultErrorMessage={defaultErrorMessage}
              errorMessage={errorMessage}
              isDateSelected={isDateSelected}
              onRangeChange={onRangeChangeHandler}
              setCustomError={setCustomError}
              setIsDateSelected={setIsDateSelected}
              valueRange={valueRange}
              variant={variant}
            />
          ) : (
            <CalendarSingleDate
              customError={customError}
              dayNames={dayNames}
              isDateSelected={isDateSelected}
              onSingleChange={onSingleChangeHandler}
              setCustomError={setCustomError}
              setIsDateSelected={setIsDateSelected}
              valueSingle={valueSingle}
              variant={variant}
            />
          )}
        </div>
      </I18nProvider>
    )
  }
)

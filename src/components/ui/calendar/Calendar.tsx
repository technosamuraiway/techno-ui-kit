import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
import { I18nProvider } from 'react-aria'

import clsx from 'clsx'

import s from './baseCalendar/BaseCalendar.module.scss'

import { CalendarRange } from './calendarRange/CalendarRange'
import { CalendarSingleDate } from './calendarSingleDate/CalendarSingleDate'

const locales = {
  en: {
    dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    errorMessages: {
      generalError: 'Error!',

      selectMonthError: 'Error, select current month or last month',
    },
  },
  ru: {
    dayNames: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
    errorMessages: {
      generalError: 'Ошибка!',

      selectMonthError: 'Ошибка, выберите текущий или прошлый месяц',
    },
  },
}

export type MyDatePickerProps = {
  defaultRangeValue?: { end: string; start: string }
  defaultSingleValue?: string
  errorMessage?: string
  locale: 'en' | 'ru'
  mode?: 'range' | 'single'
  onDateChange?: (date: { end?: Date; start?: Date }) => void
  variant?: 'default' | 'disabled'
} & ComponentPropsWithoutRef<'div'>

export const MyDatePicker = forwardRef<ElementRef<'div'>, MyDatePickerProps>(
  (
    {
      className,
      defaultRangeValue,
      defaultSingleValue,
      errorMessage,
      locale = 'ru',
      mode = 'range',
      onDateChange,
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

    return (
      <I18nProvider locale={locale === 'en' ? 'en-US' : 'ru-RU'}>
        <div
          className={clsx(s.datePickerWrapper, s[variant], className, {
            [s['data-invalid']]: errorMessage || customError,
          })}
          ref={ref}
          {...rest}
        >
          {mode === 'range' ? (
            <CalendarRange
              customError={customError}
              dayNames={dayNames}
              defaultErrorMessage={defaultErrorMessage}
              defaultRangeValue={defaultRangeValue}
              errorMessage={errorMessage}
              isDateSelected={isDateSelected}
              onDateChange={onDateChange}
              setCustomError={setCustomError}
              setIsDateSelected={setIsDateSelected}
              variant={variant}
            />
          ) : (
            <CalendarSingleDate
              customError={customError}
              dayNames={dayNames}
              defaultSingleValue={defaultSingleValue}
              isDateSelected={isDateSelected}
              onDateChange={onDateChange}
              setCustomError={setCustomError}
              setIsDateSelected={setIsDateSelected}
              variant={variant}
            />
          )}
        </div>
      </I18nProvider>
    )
  }
)

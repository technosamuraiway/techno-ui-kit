import { ComponentPropsWithoutRef, useState } from 'react'
import { I18nProvider } from 'react-aria'
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateInput,
  DatePicker,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
  RangeCalendar,
} from 'react-aria-components'

import { Typography } from '@/components'
import { CalendarIconWhite, ChevronLeft, ChevronRight } from '@/index'
import { CalendarDate, DateValue } from '@internationalized/date'
import clsx from 'clsx'

import s from './Calendar.module.scss'

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
  errorMessage?: string
  locale: 'en' | 'ru'
  mode?: 'range' | 'single'
  onDateChange?: (date: { end?: Date; start?: Date }) => void
  variant?: 'default' | 'disabled'
} & ComponentPropsWithoutRef<'div'>

export const MyDatePicker = (props: MyDatePickerProps) => {
  const {
    className,
    errorMessage,
    locale = 'ru',
    mode = 'range',
    onDateChange,
    variant = 'default',
    ...rest
  } = props
  const [isDateSelected, setIsDateSelected] = useState(false)
  const [customError, setCustomError] = useState('')

  const currentLocale = locales[locale]
  const dayNames = currentLocale.dayNames
  const defaultErrorMessage =
    mode === 'single'
      ? currentLocale.errorMessages.generalError
      : currentLocale.errorMessages.selectMonthError

  const isToday = (date: CalendarDate) => {
    const today = new Date()

    return (
      date.day === today.getDate() &&
      date.month === today.getMonth() + 1 &&
      date.year === today.getFullYear()
    )
  }

  const isWeekend = (date: CalendarDate) => {
    const jsDate = new Date(date.year, date.month - 1, date.day)
    const dayOfWeek = jsDate.getDay()

    return dayOfWeek === 0 || dayOfWeek === 6
  }

  const handleRangeChange = (range: { end: DateValue; start: DateValue }) => {
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
  const handleDateChange = (dateValue: DateValue) => {
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
    <I18nProvider locale={locale === 'en' ? 'en-US' : 'ru-RU'}>
      <div
        className={clsx(s.datePickerWrapper, s[variant], className, {
          [s['data-invalid']]: errorMessage || customError,
        })}
        {...rest}
      >
        {mode === 'range' ? (
          <DateRangePicker
            aria-label={'Date picker range'}
            className={s.datePicker}
            onChange={handleRangeChange}
          >
            <Group className={clsx(s.group, s[variant], isDateSelected ? s.active : s.default)}>
              <div className={s.dates}>
                <DateInput className={clsx(s.dateInput, s[variant])} slot={'start'}>
                  {segment => (
                    <DateSegment className={clsx(s.dateSegment, s[variant])} segment={segment} />
                  )}
                </DateInput>
                <span className={clsx(s.separator, s[variant])}>-</span>
                <DateInput className={clsx(s.dateInput, s[variant])} slot={'end'}>
                  {segment => (
                    <DateSegment className={clsx(s.dateSegment, s[variant])} segment={segment} />
                  )}
                </DateInput>
              </div>
              <Button className={clsx(s.calendarIconButton)}>
                <CalendarIconWhite className={clsx(s.calendarIcon, s[variant])} />
              </Button>
            </Group>
            {customError && (
              <div className={clsx(s.customError)}>
                <Typography
                  className={s.errorMessage}
                  style={{ color: 'var(--Danger-500)', transition: 'none' }}
                  variant={'small-text'}
                >
                  {customError || errorMessage}
                </Typography>
              </div>
            )}
            <Popover className={clsx(s.popover, s[variant])}>
              <Dialog>
                <RangeCalendar className={clsx(s.rangeCalendar, s[variant])}>
                  <div className={s.calendarHeader}>
                    <Heading className={s.heading} />
                    <div>
                      <Button className={s.navigationButton} slot={'previous'}>
                        <ChevronLeft />
                      </Button>
                      <Button className={s.navigationButton} slot={'next'}>
                        <ChevronRight />
                      </Button>
                    </div>
                  </div>
                  <CalendarGrid className={s.calendarGrid}>
                    <thead className={s.customHeader}>
                      <tr>
                        {dayNames.map((dayName, index) => (
                          <th className={s.headerCell} key={index}>
                            {dayName}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <CalendarGridBody className={s.calendarGridBody}>
                      {date => (
                        <CalendarCell
                          className={clsx(
                            s.calendarCell,
                            isToday(date) && s.today,
                            isWeekend(date) && s.weekend
                          )}
                          date={date}
                        />
                      )}
                    </CalendarGridBody>
                  </CalendarGrid>
                </RangeCalendar>
              </Dialog>
            </Popover>
          </DateRangePicker>
        ) : (
          <DatePicker
            aria-label={'Date picker'}
            className={s.datePicker}
            onChange={handleDateChange}
          >
            <Group className={clsx(s.group, s[variant], isDateSelected ? s.active : s.default)}>
              <DateInput className={clsx(s.dateInput, s[variant])}>
                {segment => (
                  <DateSegment className={clsx(s.dateSegment, s[variant])} segment={segment} />
                )}
              </DateInput>
              <Button className={clsx(s.calendarIconButton)}>
                <CalendarIconWhite className={clsx(s.calendarIcon, s[variant])} />
              </Button>
            </Group>
            {customError && (
              <div className={clsx(s.customError)}>
                <Typography
                  className={s.errorMessage}
                  style={{ color: 'var(--Danger-500)', transition: 'none' }}
                  variant={'small-text'}
                >
                  {customError || errorMessage}
                </Typography>
              </div>
            )}
            <Popover className={clsx(s.popover, s[variant])}>
              <Dialog>
                <Calendar className={clsx(s.rangeCalendar, s[variant])}>
                  <div className={s.calendarHeader}>
                    <Heading className={s.heading} />
                    <div>
                      <Button className={s.navigationButton} slot={'previous'}>
                        <ChevronLeft />
                      </Button>
                      <Button className={s.navigationButton} slot={'next'}>
                        <ChevronRight />
                      </Button>
                    </div>
                  </div>
                  <CalendarGrid className={s.calendarGrid}>
                    <thead className={s.customHeader}>
                      <tr className={s.headerCell}>
                        {dayNames.map((dayName, index) => (
                          <th key={index}>{dayName}</th>
                        ))}
                      </tr>
                    </thead>
                    <CalendarGridBody className={clsx(s.calendarGridBody)}>
                      {date => (
                        <CalendarCell
                          className={clsx(
                            s.calendarCell,
                            s.calendarCellFocus,
                            isToday(date) && s.today,
                            isWeekend(date) && s.weekend
                          )}
                          date={date}
                        />
                      )}
                    </CalendarGridBody>
                  </CalendarGrid>
                </Calendar>
              </Dialog>
            </Popover>
          </DatePicker>
        )}
      </div>
    </I18nProvider>
  )
}

import { ComponentPropsWithoutRef, ElementType, useState } from 'react'
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
  FieldError,
  Group,
  Heading,
  Popover,
  RangeCalendar,
  Text,
} from 'react-aria-components'

import { ChevronLeft } from '@/assets/icons/chevronLeft'
import { ChevronRight } from '@/assets/icons/chevronRight'
import { CalendarDate } from '@internationalized/date'
import clsx from 'clsx'

import s from './calendar.module.scss'

import { CalendarIconWhite } from '../../../assets/icons/calendarIconWhite'

export type MyDatePickerProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
  locale?: string
  mode?: 'range' | 'single'
  onDateChange?: (date: Date) => void
  variant?: 'default' | 'disabled'
} & ComponentPropsWithoutRef<T>

export const MyDatePicker = <T extends ElementType = 'div'>(props: MyDatePickerProps<T>) => {
  const {
    className,
    mode = 'range',
    onDateChange,
    selectedDate = new Date(),
    variant = 'default',
    ...rest
  } = props
  const [isDateSelected, setIsDateSelected] = useState(false)
  const dayNames: string[] = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В']

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

  return (
    <div className={clsx(s.datePickerWrapper, s[variant], className)} {...rest}>
      {mode === 'range' ? (
        <DateRangePicker className={s.datePicker} onChange={() => setIsDateSelected(true)}>
          <Group className={clsx(s.group, s[variant], isDateSelected ? s.active : s.default)}>
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
            <Button className={clsx(s.calendarIconButton)}>
              <CalendarIconWhite className={clsx(s.calendarIcon, s[variant])} />
            </Button>
          </Group>
          <FieldError className={s.fieldError} />
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
                  <div className={s.customHeader}>
                    {dayNames.map((dayName, index) => (
                      <div className={s.headerCell} key={index}>
                        {dayName}
                      </div>
                    ))}
                  </div>
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
                <Text className={s.errorMessage} slot={'errorMessage'} />
              </RangeCalendar>
            </Dialog>
          </Popover>
        </DateRangePicker>
      ) : (
        <DatePicker className={s.datePicker} onChange={() => setIsDateSelected(true)}>
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
          <FieldError className={s.fieldError} />
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
                  <div className={s.customHeader}>
                    {dayNames.map((dayName, index) => (
                      <div className={s.headerCell} key={index}>
                        {dayName}
                      </div>
                    ))}
                  </div>
                  <CalendarGridBody className={s.calendarGridBody}>
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
                <Text className={s.errorMessage} slot={'errorMessage'} />
              </Calendar>
            </Dialog>
          </Popover>
        </DatePicker>
      )}
    </div>
  )
}

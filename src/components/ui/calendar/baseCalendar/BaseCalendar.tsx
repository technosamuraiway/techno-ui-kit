import { ComponentType, ReactNode } from 'react'
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from 'react-aria-components'

import { CalendarIconWhite, ChevronLeft, ChevronRight } from '@/assets/icons'
import { Typography } from '@/components'
import { CalendarDate } from '@internationalized/date'
import clsx from 'clsx'

import s from '../Calendar.module.scss'

export type VariantType = 'default' | 'disabled'

interface IProps {
  CalendarComponent: ComponentType<{ children: ReactNode; className: string }>
  calendarCellCN?: string
  customError?: string
  dayNames: string[]
  isDateSelected: boolean
  isSingle: boolean
  variant?: VariantType
}

export const BaseCalendar = ({
  CalendarComponent,
  calendarCellCN,
  customError,
  dayNames,
  isDateSelected,
  isSingle,
  variant = 'default',
}: IProps) => {
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
    <>
      <Group className={clsx(s.group, s[variant], isDateSelected && s.active)}>
        {isSingle ? (
          <DateInputComponent variant={variant} />
        ) : (
          <div className={clsx(s.dates)}>
            <DateInputComponent slot={'start'} variant={variant} />
            <span className={clsx(s.separator, s[variant])}>-</span>
            <DateInputComponent slot={'end'} variant={variant} />
          </div>
        )}

        <Button className={clsx(s.calendarIconButton, s[variant])} type={'button'}>
          <CalendarIconWhite />
        </Button>
      </Group>
      {customError && (
        <Typography className={s.errorMessage} variant={'small-text'}>
          {customError}
        </Typography>
      )}
      <Popover className={clsx(s.popover, s[variant])}>
        <Dialog>
          <CalendarComponent className={clsx(s.rangeCalendar, s[variant])}>
            <div className={s.calendarHeader}>
              <Heading className={s.heading} />
              <div>
                <Button className={s.chevronButton} slot={'previous'} type={'button'}>
                  <ChevronLeft />
                </Button>
                <Button className={s.chevronButton} slot={'next'} type={'button'}>
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
                      isWeekend(date) && s.weekend,
                      calendarCellCN
                    )}
                    date={date}
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </CalendarComponent>
        </Dialog>
      </Popover>
    </>
  )
}

type DateInputComponentProps = {
  slot?: string
  variant: VariantType
}

function DateInputComponent({ slot, variant }: DateInputComponentProps) {
  return (
    <DateInput className={clsx(s.dateInput, s[variant])} slot={slot}>
      {segment => <DateSegment className={clsx(s.dateSegment, s[variant])} segment={segment} />}
    </DateInput>
  )
}

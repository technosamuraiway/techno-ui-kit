import { DateInput, DateSegment } from 'react-aria-components'

import clsx from 'clsx'

import s from '../BaseCalendar.module.scss'

import { CalendarVariant } from '../../utils'

type Props = {
  slot?: string
  variant: CalendarVariant
}

export function DateInputComponent({ slot, variant }: Props) {
  return (
    <DateInput className={clsx(s.dateInput, s[variant])} slot={slot}>
      {segment => <DateSegment className={clsx(s.dateSegment, s[variant])} segment={segment} />}
    </DateInput>
  )
}

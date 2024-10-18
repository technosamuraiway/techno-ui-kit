import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DateValue } from '@internationalized/date'

import { MyDatePicker } from './Calendar'
import { RangeValue } from './baseCalendar/BaseCalendar'

const meta: Meta = {
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['range', 'single'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'disabled'],
    },
  },
  component: MyDatePicker,
  title: 'Components/Calendar',
}

export default meta
type Story = StoryObj<typeof meta>

const DefaultRange = () => {
  const [rangeValue, setRangeValue] = useState<RangeValue<DateValue> | undefined>(undefined)

  const handleRangeChange = (date: { end?: Date; start?: Date }) => {
    if (date) {
      setRangeValue({ end: date.end, start: date.start })
    }
  }

  return (
    <MyDatePicker
      mode={'range'}
      onRangeChange={handleRangeChange}
      valueRange={rangeValue}
      variant={'default'}
    />
  )
}

// -0----------------
// const [currentDate, setCurrentDate] = useState<DateValue | undefined>(
//     defaultSingleValue ? parseDate(defaultSingleValue) : undefined
// )
//
// useEffect(() => {
//   if (defaultSingleValue) {
//     const newDate = parseDate(defaultSingleValue)
//
//     setCurrentDate(newDate)
//   } else {
//     setCurrentDate(undefined)
//   }
// }, [defaultSingleValue])
//
// // ----------------------
//
// const [value, setValue] = useState(() => {
//   if (defaultRangeValue) {
//     return {
//       end: parseDate(defaultRangeValue.end),
//       start: parseDate(defaultRangeValue.start),
//     }
//   }
//
//   return undefined
// })
//
// useEffect(() => {
//   if (defaultRangeValue && defaultRangeValue.start && defaultRangeValue.end) {
//     setValue({
//       end: parseDate(defaultRangeValue.end),
//       start: parseDate(defaultRangeValue.start),
//     })
//   }
// }, [defaultRangeValue])

// ======================

export const DefaultRangeStory: Story = {
  render: () => <DefaultRange />,

  // args: {
  //   defaultRangeValue: { end: '2020-01-01', start: '2020-01-07' },
  //   disabled: false,
  //   mode: 'range',
  //   variant: 'default',
  // },
}

export const DisabledRangeStory: Story = {
  args: {
    disabled: true,
    mode: 'range',
    variant: 'disabled',
  },
}

export const DefaultSingleStory: Story = {
  args: {
    defaultSingleValue: '2020-01-01',
    disabled: false,
    mode: 'single',
    variant: 'default',
  },
}

export const DisabledSingleStory: Story = {
  args: {
    disabled: true,
    mode: 'single',
    variant: 'disabled',
  },
}

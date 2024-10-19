import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { DateValue } from '@internationalized/date'

import { Calendar } from './Calendar'
import { CalendarVariant, RangeValue } from './utils'

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
  component: Calendar,
  title: 'Components/Calendar',
}

export default meta
type Story = StoryObj<typeof meta>

const DefaultRange = ({ variant }: { variant: CalendarVariant }) => {
  const [rangeValue, setRangeValue] = useState<RangeValue<DateValue> | undefined>(undefined)

  return (
    <Calendar
      labelText={'Range Calendar'}
      mode={'range'}
      onRangeChange={setRangeValue}
      valueRange={rangeValue}
      variant={variant}
    />
  )
}

const DefaultSingle = ({ variant }: { variant: CalendarVariant }) => {
  const [singleValue, setSingleValue] = useState<DateValue | undefined>(undefined)

  return (
    <Calendar
      labelText={'Single Calendar'}
      mode={'single'}
      onSingleChange={setSingleValue}
      valueSingle={singleValue}
      variant={variant}
    />
  )
}

export const DefaultRangeStory: Story = {
  render: () => <DefaultRange variant={'default'} />,
}

export const DisabledRangeStory: Story = {
  render: () => <DefaultRange variant={'disabled'} />,
}

export const DefaultSingleStory: Story = {
  render: () => <DefaultSingle variant={'default'} />,
}

export const DisabledSingleStory: Story = {
  render: () => <DefaultSingle variant={'disabled'} />,
}

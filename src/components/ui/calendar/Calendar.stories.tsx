import type { Meta, StoryObj } from '@storybook/react'

import { MyDatePicker } from './Calendar'

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

export const Default: Story = {
  args: {
    defaultRangeValue: { end: '2020-01-01', start: '2020-01-07' },
    disabled: false,
    mode: 'range',
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    mode: 'range',
    variant: 'disabled',
  },
}

export const SingleDate: Story = {
  args: {
    defaultSingleValue: '2020-01-01',
    disabled: false,
    mode: 'single',
    variant: 'default',
  },
}

export const SingleDisabled: Story = {
  args: {
    disabled: true,
    mode: 'single',
    variant: 'disabled',
  },
}

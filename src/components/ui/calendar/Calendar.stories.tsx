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

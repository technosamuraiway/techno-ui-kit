import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Check-box',
    onCheckedChange: () => {},
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked)

    return <Checkbox {...args} checked={checked} onCheckedChange={() => setChecked(!checked)} />
  },
}
export const Selected: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Check-box',
    onCheckedChange: () => {},
  },
}
export const Unselected: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Check-box',
    onCheckedChange: () => {},
  },
}

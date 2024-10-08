import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TextField } from './TextField'

const meta = {
  argTypes: {
    onChange: {},
    onClick: { action: 'clicked' },
    type: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search', 'error'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Default',
  },
}
export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Your Password',
    type: 'password',
    value: 'password',
  },
}
export const Search: Story = {
  render: () => {
    const [value, setValue] = useState('')

    const handleChange = (e: any) => {
      setValue(e.target.value)
    }

    return (
      <TextField
        label={'Search'}
        onChange={handleChange}
        placeholder={'Search'}
        type={'search'}
        value={value}
      />
    )
  },
}
export const Error: Story = {
  args: {
    error: 'Error!',
    label: 'Error',
    value: 'Error',
  },
}

export const WithStar: Story = {
  args: {
    label: 'With Star',
    withStar: true,
  },
}

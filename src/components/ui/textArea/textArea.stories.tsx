import type { Meta, StoryObj } from '@storybook/react'

import { TextArea, TextAreaProps } from './textArea'

const meta: Meta<TextAreaProps> = {
  argTypes: {
    errorText: {
      control: 'text',
      description: 'Text displayed when in error state',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables the text area',
    },
    isError: {
      control: 'boolean',
      description: 'Displays an error state',
    },
  },
  component: TextArea,
  tags: ['autodocs'],
  title: 'Components/TextArea',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Text area',
  },
}

export const Error: Story = {
  args: {
    errorText: 'Error text',
    isError: true,
    placeholder: 'Text area',
  },
}

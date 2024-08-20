import type { Meta, StoryObj } from '@storybook/react'

import { Header, HeaderProps } from './Header'

const meta: Meta<HeaderProps> = {
  argTypes: {
    withAuthButtons: {
      control: 'boolean',
    },
    withNotifications: {
      control: 'boolean',
    },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
}

export default meta
type Story = StoryObj<HeaderProps>

export const HeaderWithNotifications: Story = {
  args: {
    withNotifications: true,
  },
}

export const HeaderWithAuthButtons: Story = {
  args: {
    withAuthButtons: true,
  },
}

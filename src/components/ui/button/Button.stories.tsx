import type { Meta, StoryObj } from '@storybook/react'

import FlagRussiaIcon from '../../../assets/icons/flags/ruFlag.png'
import { LogoutIcon } from '../../../assets/icons/logoutIcon'
import { Button } from './Button'

const meta: Meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'textButton', 'iconButton', 'languageButton'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: ' Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryWithIcon: Story = {
  args: {
    children: [<LogoutIcon key={'secondary-logout-icon'} />, 'Log Out'],
    disabled: false,
    variant: 'iconButton',
  },
}
export const LanguageButton: Story = {
  args: {
    children: [<img alt={'Flag'} key={'Id'} src={FlagRussiaIcon} />, 'Russian'],
    disabled: false,
    variant: 'languageButton',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}

export const TextButton: Story = {
  args: {
    children: 'Text Button',
    disabled: false,
    variant: 'textButton',
  },
}
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    disabled: false,
    variant: 'outline',
  },
}

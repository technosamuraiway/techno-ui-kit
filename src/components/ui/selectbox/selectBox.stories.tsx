import type { Meta, StoryObj } from '@storybook/react'

import { FlagRussiaIcon } from '../../../assets/icons/flagRussia'
import { FlagUnitedIcon } from '../../../assets/icons/flagUnited'
import { SelectBox, SelectBoxProps } from './SelectBox'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the select box',
    },
    options: {
      control: [],
      description: 'Options available in the select box',
    },
    variant: {
      control: 'radio',
      description: 'Select box variant',
      options: ['default', 'withFlags'],
    },
  },
  component: SelectBox,

  tags: ['autodocs'],
  title: 'Components/SelectBox',
} satisfies Meta<SelectBoxProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3' },
      { name: 'Option 4' },
    ],
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3' },
      { name: 'Option 4' },
    ],
    variant: 'default',
  },
}

export const WithFlags: Story = {
  args: {
    disabled: false,
    options: [
      { IconComponent: FlagUnitedIcon, name: 'English' },
      { IconComponent: FlagRussiaIcon, name: 'Russian' },
    ],
    variant: 'withFlags',
  },

  play: async ({ args }) => {
    const changeLangHandler = () => {}

    args.options.forEach(option => {
      if (option.name === args.variant) {
        changeLangHandler()
      }
    })
  },
}

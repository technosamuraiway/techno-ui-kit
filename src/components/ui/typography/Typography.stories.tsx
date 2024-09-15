import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'bold-text-14',
        'bold-text-16',
        'h1',
        'h2',
        'h3',
        'large',
        'medium-text-14',
        'regular-link',
        'regular-text-14',
        'regular-text-16',
        'semi-bold-small-text',
        'small-link',
        'small-text',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large Typography',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'H1 Typography',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'H2 Typography',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'H3 Typography',
    variant: 'h3',
  },
}

export const RegularText16: Story = {
  args: {
    children: 'RegularText16 Typography',
    variant: 'regular-text-16',
  },
}

export const BoldText16: Story = {
  args: {
    children: 'BoldText16 Typography',
    variant: 'bold-text-16',
  },
}

export const RegularText14: Story = {
  args: {
    children: 'RegularText14 Typography',
    variant: 'regular-text-14',
  },
}

export const MediumText14: Story = {
  args: {
    children: 'MediumText14 Typography',
    variant: 'medium-text-14',
  },
}

export const BoldText14: Story = {
  args: {
    children: 'BoldText14 Typography',
    variant: 'bold-text-14',
  },
}

export const SmallText: Story = {
  args: {
    children: 'SmallText Typography',
    variant: 'small-text',
  },
}

export const SemiBoldSmallText: Story = {
  args: {
    children: 'SemiBoldSmallText Typography',
    variant: 'semi-bold-small-text',
  },
}

export const RegularLink: Story = {
  args: {
    children: 'RegularLink Typography',
    variant: 'regular-link',
  },
}

export const SmallLink: Story = {
  args: {
    children: 'SmallLink Typography',
    variant: 'small-link',
  },
}

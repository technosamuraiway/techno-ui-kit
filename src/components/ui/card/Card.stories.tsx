import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'

import { Card } from './Card'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Typography as={'h1'} variant={'h1'}>
        Card title
      </Typography>
    ),
    style: {
      height: '552px',
      padding: '24px',
      width: '420px',
    },
  },
}
export const CardSectionElement: Story = {
  args: {
    as: 'section',
    children: (
      <Typography as={'h1'} variant={'h1'}>
        Card Section Element
      </Typography>
    ),
    style: {
      height: '552px',
      padding: '24px',
      width: '420px',
    },
  },
}

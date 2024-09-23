import { DefaultNotifications } from '@/assets/icons/DefaultNotifications'
import { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './DropDown'

const meta = {
  argTypes: {},
  component: Dropdown.Root,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown.Root>

export default meta
type Story = StoryObj<typeof Dropdown.Root>

const Wrapper = () => {
  return (
    <Dropdown.Root trigger={<DefaultNotifications />}>
      <Dropdown.Item>Lorem ipsum</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item>Lorem ipsum d</Dropdown.Item>
    </Dropdown.Root>
  )
}

export const DefaultDropdown: Story = {
  render: () => <Wrapper />,
}

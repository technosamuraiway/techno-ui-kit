import { useState } from 'react'

import { ActiveNotifications } from '@/assets/icons'
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

interface IProps {
  avoidCollisions?: boolean
  contentSide?: 'bottom' | 'left' | 'right' | 'top'
  withArrow?: boolean
}

const Wrapper = ({ avoidCollisions, contentSide, withArrow }: IProps) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)

  return (
    <div style={{ padding: '100px' }}>
      <Dropdown.Root
        avoidCollisions={avoidCollisions}
        contentSide={contentSide}
        onOpenChange={setOpenDropDown}
        open={openDropDown}
        trigger={openDropDown ? <ActiveNotifications /> : <DefaultNotifications />}
        withArrow={withArrow}
      >
        <Dropdown.Item>Lorem ipsum</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Lorem ipsum d</Dropdown.Item>
      </Dropdown.Root>
    </div>
  )
}

export const DefaultDropdown: Story = {
  render: () => <Wrapper />,
}

export const UpDropdown: Story = {
  render: () => <Wrapper avoidCollisions={false} contentSide={'top'} />,
}

export const DropdownWithoutArrowDown: Story = {
  render: () => <Wrapper contentSide={'bottom'} withArrow={false} />,
}

export const DropdownWithoutArrowUP: Story = {
  render: () => <Wrapper avoidCollisions={false} contentSide={'top'} withArrow={false} />,
}

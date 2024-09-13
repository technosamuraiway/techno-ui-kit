import { useState } from 'react'

import { ActiveCreateIcon } from '@/assets/icons/sideBar/ActiveCreateIcon'
import { DefaultCreateIcon } from '@/assets/icons/sideBar/DefaultCreateIcon'
import { Meta, StoryObj } from '@storybook/react'

import { NavItem, SideBarItems } from './SideBarItems'

const meta: Meta<typeof SideBarItems> = {
  argTypes: {},
  component: SideBarItems,
  tags: ['autodocs'],
  title: 'Components/SideBarItems',
}

export default meta
type Story = StoryObj<typeof meta>

const navItemsArray: NavItem[] = [
  {
    activeIconComponent: <ActiveCreateIcon />,
    altText: 'text',
    defaultIconComponent: <DefaultCreateIcon />,
    hrefLink: '#create',
    id: 1,
    isDisabled: false,
    text: 'create',
  },
  {
    activeIconComponent: <ActiveCreateIcon />,
    altText: 'text',
    defaultIconComponent: <DefaultCreateIcon />,
    hrefLink: '#home',
    id: 2,
    isDisabled: false,
    text: 'home',
  },
  {
    activeIconComponent: <ActiveCreateIcon />,
    altText: 'text',
    defaultIconComponent: <DefaultCreateIcon />,
    hrefLink: '#disabled',
    id: 3,
    isDisabled: true,
    text: 'disabled',
  },
]

export const SideBarItemsWrapper = () => {
  const [currentPath, setCurrentPath] = useState<string>('')

  const activeConditionFunction = (itemPath: string) => {
    return itemPath === currentPath
  }

  const onSideBarItemClickHandler = (path: string) => {
    setCurrentPath(path)
  }

  return (
    <SideBarItems
      activeCondition={activeConditionFunction}
      navItems={navItemsArray}
      onSideBarItemClick={onSideBarItemClickHandler}
    />
  )
}

export const DefaultSideBarItems: Story = {
  render: () => <SideBarItemsWrapper />,
}

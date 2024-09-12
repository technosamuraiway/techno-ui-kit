import createIcon from '@/assets/icons/sideBar/createIcon.svg'
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
    altText: 'text',
    hrefLink: '#',
    iconSrc: createIcon,
    id: 1,
    text: 'create',
  },
]

export const DefaultSideBarItems: Story = {
  args: {
    navItems: navItemsArray,
  },
}

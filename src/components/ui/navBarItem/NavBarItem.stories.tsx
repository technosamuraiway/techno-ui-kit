import { useState } from 'react'

import { ActiveCreateIcon } from '@/assets/icons/sideBar/ActiveCreateIcon'
import { ActiveFavoritesIcon } from '@/assets/icons/sideBar/ActiveFavoritesIcon'
import { ActiveHomeIcon } from '@/assets/icons/sideBar/ActiveHomeIcon'
import { ActiveMessengerIcon } from '@/assets/icons/sideBar/ActiveMessengerIcon'
import { ActiveProfileIcon } from '@/assets/icons/sideBar/ActiveProfileIcon'
import { ActiveSearchIcon } from '@/assets/icons/sideBar/ActiveSearchIcon'
import { ActiveStatisticsIcon } from '@/assets/icons/sideBar/ActiveStatisticsIcon'
import { DefaultCreateIcon } from '@/assets/icons/sideBar/DefaultCreateIcon'
import { DefaultFavoritesIcon } from '@/assets/icons/sideBar/DefaultFavoritesIcon'
import { DefaultHomeIcon } from '@/assets/icons/sideBar/DefaultHomeIcon'
import { DefaultMessengerIcon } from '@/assets/icons/sideBar/DefaultMessengerIcon'
import { DefaultProfileIcon } from '@/assets/icons/sideBar/DefaultProfileIcon'
import { DefaultSearchIcon } from '@/assets/icons/sideBar/DefaultSearchIcon'
import { DefaultStatisticsIcon } from '@/assets/icons/sideBar/DefaultStatisticsIcon'
import { Meta, StoryObj } from '@storybook/react'

import { NavBarItem, NavItem } from './NavBarItem'

const meta: Meta<typeof NavBarItem> = {
  argTypes: {},
  component: NavBarItem,
  tags: ['autodocs'],
  title: 'Components/NavBarItem',
}

export default meta

type Story = StoryObj<typeof meta>

const navFirstItemsArray: NavItem[] = [
  {
    activeIconComponent: <ActiveHomeIcon />,
    altText: 'Home Icon',
    defaultIconComponent: <DefaultHomeIcon />,
    hrefLink: '#Home',
    id: 1,
    isDisabled: false,
    text: 'Home',
  },
  {
    activeIconComponent: <ActiveCreateIcon />,
    altText: 'Create Icon',
    defaultIconComponent: <DefaultCreateIcon />,
    hrefLink: '#Create',
    id: 2,
    isDisabled: false,
    text: 'Create',
  },
  {
    activeIconComponent: <ActiveProfileIcon />,
    altText: 'My Profile',
    defaultIconComponent: <DefaultProfileIcon />,
    hrefLink: '#My Profile',
    id: 3,
    isDisabled: false,
    text: 'My Profile',
  },
  {
    activeIconComponent: <ActiveMessengerIcon />,
    altText: 'Messenger',
    defaultIconComponent: <DefaultMessengerIcon />,
    hrefLink: '#Messenger',
    id: 4,
    isDisabled: false,
    text: 'Messenger',
  },
  {
    activeIconComponent: <ActiveSearchIcon />,
    altText: 'Search',
    defaultIconComponent: <DefaultSearchIcon />,
    hrefLink: '#Search',
    id: 5,
    isDisabled: true,
    text: 'Search',
  },
]

const navSecondItemsArray: NavItem[] = [
  {
    activeIconComponent: <ActiveStatisticsIcon />,
    altText: 'Statistics Icon',
    defaultIconComponent: <DefaultStatisticsIcon />,
    hrefLink: '#Statistics',
    id: 10,
    isDisabled: false,
    text: 'Statistics',
  },
  {
    activeIconComponent: <ActiveFavoritesIcon />,
    altText: 'Favorites Icon',
    defaultIconComponent: <DefaultFavoritesIcon />,
    hrefLink: '#Favorites',
    id: 11,
    isDisabled: false,
    text: 'Favorites',
  },
]

const navThirdItemsArray: NavItem[] = [
  {
    activeIconComponent: <ActiveMessengerIcon />,
    altText: 'Messenger',
    defaultIconComponent: <DefaultMessengerIcon />,
    hrefLink: '#Messenger',
    id: 14,
    isDisabled: false,
    text: 'Messenger',
  },
]

const NavBarItemWrapper = () => {
  const [currentPath, setCurrentPath] = useState<string>('#Create')

  const activeConditionFunction = (itemPath: string) => {
    return itemPath === currentPath
  }

  const onSideBarItemClickHandler = (path: string) => {
    setCurrentPath(path)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          padding: '4.5rem',
        }}
      >
        {navFirstItemsArray.map(el => {
          return (
            <NavBarItem
              activeCondition={activeConditionFunction}
              item={el}
              key={el.id}
              onNavBarItemClick={onSideBarItemClickHandler}
            />
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          padding: '4.5rem',
        }}
      >
        {navSecondItemsArray.map(el => {
          return (
            <NavBarItem
              activeCondition={activeConditionFunction}
              item={el}
              key={el.id}
              onNavBarItemClick={onSideBarItemClickHandler}
            />
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          padding: '4.5rem',
        }}
      >
        {navThirdItemsArray.map(el => {
          return (
            <NavBarItem
              activeCondition={activeConditionFunction}
              digitsCondition
              item={el}
              key={el.id}
              onNavBarItemClick={onSideBarItemClickHandler}
              unReadCount={3}
            />
          )
        })}
      </div>
    </>
  )
}

export const ExampleOfNavBarItem: Story = {
  render: () => <NavBarItemWrapper />,
}

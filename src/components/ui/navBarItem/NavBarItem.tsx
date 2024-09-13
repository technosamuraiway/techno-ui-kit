import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Typography } from '@/components'
import clsx from 'clsx'

import s from './NavBarItem.module.scss'

export type NavItem = {
  activeIconComponent: ReactNode
  altText?: string
  defaultIconComponent: ReactNode
  hrefLink: string
  id: number
  isDisabled?: boolean
  text: string
}

type NavBarItemProps<T extends ElementType = 'a'> = {
  activeCondition: (itemPath: string) => boolean
  as?: T
  iconClassName?: string
  item: NavItem
  onNavBarItemClick: (path: string) => void
  textClassName?: string
} & ComponentPropsWithoutRef<T>

export const NavBarItem = <T extends ElementType = 'a'>(props: NavBarItemProps<T>) => {
  const {
    activeCondition,
    as: Component = 'a',
    className,
    iconClassName,
    item,
    onNavBarItemClick,
    textClassName,
    ...rest
  } = props

  const isActive = activeCondition(item.hrefLink)
  const IconComponent = isActive ? item.activeIconComponent : item.defaultIconComponent

  return (
    <Component
      aria-disabled={item.isDisabled}
      className={clsx(s.link, isActive && s.active, item.isDisabled && s.disabled, className)}
      key={item.id}
      onClick={() => onNavBarItemClick(item.hrefLink)}
      tabIndex={item.isDisabled ? -1 : 0}
      {...rest}
    >
      <span className={clsx(s.icon, iconClassName)}>{IconComponent}</span>
      <Typography className={clsx(s.text, textClassName)} variant={'medium-text-14'}>
        {item.text}
      </Typography>
    </Component>
  )
}

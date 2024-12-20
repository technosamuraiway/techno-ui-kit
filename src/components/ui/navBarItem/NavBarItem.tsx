import { ComponentPropsWithoutRef, ElementType, KeyboardEvent, ReactNode } from 'react'

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
  countClassName?: string
  digitsCondition?: boolean
  iconClassName?: string
  item: NavItem
  onNavBarItemClick?: (hrefLink: string) => void
  textClassName?: string
  unReadCount?: number
} & ComponentPropsWithoutRef<T>

export const NavBarItem = <T extends ElementType = 'a'>(props: NavBarItemProps<T>) => {
  const {
    activeCondition,
    as: Component = 'a',
    className,
    countClassName,
    digitsCondition = false,
    iconClassName,
    item,
    onNavBarItemClick,
    textClassName,
    unReadCount = 0,
    ...rest
  } = props

  const isActive = activeCondition(item.hrefLink)
  const IconComponent = isActive ? item.activeIconComponent : item.defaultIconComponent

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && onNavBarItemClick) {
      onNavBarItemClick(item.hrefLink)
    }
  }

  return (
    <Component
      aria-disabled={item.isDisabled}
      className={clsx(s.link, isActive && s.active, item.isDisabled && s.disabled, className)}
      key={item.id}
      onClick={onNavBarItemClick && (() => onNavBarItemClick(item.hrefLink))}
      onKeyDown={onKeyDownHandler}
      tabIndex={item.isDisabled ? -1 : 0}
      {...rest}
    >
      <span className={clsx(s.icon, iconClassName)}>{IconComponent}</span>
      <Typography className={clsx(s.text, textClassName)} variant={'medium-text-14'}>
        {item.text}
      </Typography>
      {digitsCondition && unReadCount > 0 && (
        <Typography className={clsx(s.count, countClassName)} variant={'bold-text-14'}>
          +{unReadCount}
        </Typography>
      )}
    </Component>
  )
}

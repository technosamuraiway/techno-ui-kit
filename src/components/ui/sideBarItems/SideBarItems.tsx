import { MouseEvent, ReactNode } from 'react'

import { Typography } from '@/components'
import clsx from 'clsx'

import s from './SideBarItems.module.scss'

export type NavItem = {
  activeIconComponent: ReactNode
  altText?: string
  defaultIconComponent: ReactNode
  hrefLink: string
  id: number
  isDisabled?: boolean
  text: string
}

interface IProps {
  activeCondition: (itemPath: string) => boolean
  iconClassName?: string
  linkClassName?: string
  navItems: NavItem[]
  onSideBarItemClick: (path: string) => void
  textClassName?: string
  wrapperClassName?: string
}

export const SideBarItems = ({
  activeCondition,
  iconClassName,
  linkClassName,
  navItems,
  onSideBarItemClick,
  textClassName,
  wrapperClassName,
}: IProps) => {
  const onLinkClickHandler = (e: MouseEvent, path: string) => {
    e.preventDefault()

    onSideBarItemClick(path)
  }

  return (
    <div className={clsx(s.wrapper, wrapperClassName)}>
      {navItems.map(el => {
        const isActive = activeCondition(el.hrefLink)
        const IconComponent = isActive ? el.activeIconComponent : el.defaultIconComponent

        return (
          <a
            aria-disabled={el.isDisabled}
            className={clsx(
              s.link,
              isActive && s.active,
              el.isDisabled && s.disabled,
              linkClassName
            )}
            href={el.hrefLink}
            key={el.id}
            onClick={e => onLinkClickHandler(e, el.hrefLink)}
          >
            <span className={clsx(s.icon, iconClassName)}>{IconComponent}</span>
            <Typography className={clsx(s.text, textClassName)} variant={'medium-text-14'}>
              {el.text}
            </Typography>
          </a>
        )
      })}
    </div>
  )
}

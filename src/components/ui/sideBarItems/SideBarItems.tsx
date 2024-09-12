import { Typography } from '@/components'
import clsx from 'clsx'

import s from './SideBarItems.module.scss'

export type NavItem = {
  altText?: string
  hrefLink: string
  iconSrc: string
  id: number
  text: string
}

interface IProps {
  iconClassName?: string
  linkClassName?: string
  navItems: NavItem[]
  textClassName?: string
  wrapperClassName?: string
}

export const SideBarItems = ({
  iconClassName,
  linkClassName,
  navItems,
  textClassName,
  wrapperClassName,
}: IProps) => {
  return (
    <div className={clsx(s.wrapper, wrapperClassName)}>
      {navItems.map(el => {
        return (
          <a className={clsx(s.link, linkClassName)} href={el.hrefLink} key={el.id}>
            <img
              alt={el.altText ?? 'Nav Icon'}
              className={clsx(s.icon, iconClassName)}
              src={el.iconSrc}
            />
            <Typography className={clsx(s.text, textClassName)} variant={'medium-text-14'}>
              {el.text}
            </Typography>
          </a>
        )
      })}
    </div>
  )
}

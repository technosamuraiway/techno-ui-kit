import { ComponentPropsWithoutRef, ElementType } from 'react'

import { FlagRussiaIcon } from '@/assets/icons/flagRussia'
import { FlagUnitedIcon } from '@/assets/icons/flagUnited'
import { Notifications } from '@/assets/icons/notifications'

import s from './header.module.scss'

import { Button } from '../button'
import { SelectBox } from '../selectbox'
import { Typography } from '../typography'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  className?: string
  withAuthButtons?: boolean
  withNotifications?: boolean
} & ComponentPropsWithoutRef<T>

export const Header = <T extends ElementType = 'header'>(props: HeaderProps<T>) => {
  const {
    as: Component = 'header',
    className,
    withAuthButtons = false,
    withNotifications = false,
    ...rest
  } = props

  return (
    <Component className={`${s.header} ${className}`} {...rest}>
      <div className={s.leftSection}>
        <Typography className={s.logo} variant={'large'}>
          Inctagram
        </Typography>
      </div>
      <div className={s.rightSection}>
        {withNotifications && (
          <div className={s.notification}>
            <Notifications />
            <span className={s.badge}>3</span>
          </div>
        )}
        <div className={s.languageSwitcher}>
          <SelectBox
            options={[
              { IconComponent: FlagUnitedIcon, name: 'English' },
              { IconComponent: FlagRussiaIcon, name: 'Russian' },
            ]}
            variant={'withFlags'}
          />
        </div>
        {withAuthButtons && (
          <div className={s.authButtons}>
            <Button className={s.loginButton} variant={'textButton'}>
              Log in
            </Button>
            <Button className={s.signUpButton} fullWidth variant={'primary'}>
              Sign up
            </Button>
          </div>
        )}
      </div>
    </Component>
  )
}

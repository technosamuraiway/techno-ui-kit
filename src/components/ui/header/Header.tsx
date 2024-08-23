import { ComponentPropsWithoutRef, ElementType } from 'react'

import { FlagRussiaIcon } from '@/assets/icons/flagRussia'
import { FlagUnitedIcon } from '@/assets/icons/flagUnited'
import { Notifications } from '@/assets/icons/notifications'
import clsx from 'clsx'

import s from './header.module.scss'

import { Button } from '../button'
import { SelectBox } from '../selectbox'
import { Typography } from '../typography'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  changeLangHandler?: (locale: string) => void
  className?: string
  onLogoClick?: () => void
  withAuthButtons?: boolean
  withNotifications?: boolean
} & ComponentPropsWithoutRef<T>

export const Header = <T extends ElementType = 'header'>(props: HeaderProps<T>) => {
  const {
    as: Component = 'header',
    changeLangHandler = () => {},
    className,
    onLogoClick = () => {},
    withAuthButtons = false,
    withNotifications = false,
    ...rest
  } = props

  const languageOptions = [
    { IconComponent: FlagUnitedIcon, locale: 'en', name: 'English' },
    { IconComponent: FlagRussiaIcon, locale: 'ru', name: 'Russian' },
  ]

  const handleLanguageChange = (name: string) => {
    const selectedLanguage = languageOptions.find(option => option.name === name)

    if (selectedLanguage && changeLangHandler) {
      changeLangHandler(selectedLanguage.locale)
    }
  }

  return (
    <Component className={clsx(s.header, className)} {...rest}>
      <div className={s.leftSection} onClick={onLogoClick}>
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
            onSelectChange={handleLanguageChange}
            options={languageOptions.map(option => ({
              IconComponent: option.IconComponent,
              name: option.name,
            }))}
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

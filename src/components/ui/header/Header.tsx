import { ComponentPropsWithoutRef, ElementType } from 'react'

import { DefaultNotifications } from '@/assets/icons/DefaultNotifications'
import { Button, Select, SelectOptionType, Typography } from '@/components'
import clsx from 'clsx'

import s from './header.module.scss'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  changeLangHandler?: (langValue: string) => void
  changeLanguageBtnCurrentValue: string
  changeLanguageBtnHandler: (value: string) => void
  changeLanguageBtnOptions: SelectOptionType[]
  className?: string
  onLogoClick?: () => void
  withAuthButtons?: boolean
  withNotifications?: boolean
} & ComponentPropsWithoutRef<T>

export const Header = <T extends ElementType = 'header'>(props: HeaderProps<T>) => {
  const {
    as: Component = 'header',
    changeLangHandler = () => {},
    changeLanguageBtnCurrentValue,
    changeLanguageBtnHandler,
    changeLanguageBtnOptions,
    className,
    onLogoClick = () => {},
    withAuthButtons = false,
    withNotifications = false,
    ...rest
  } = props

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
            <DefaultNotifications />
            <span className={s.badge}>3</span>
          </div>
        )}
        <div className={s.languageSwitcher}>
          <Select
            currentValue={changeLanguageBtnCurrentValue}
            onValueChange={changeLanguageBtnHandler}
            options={changeLanguageBtnOptions}
            selectWidth={'160px'}
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

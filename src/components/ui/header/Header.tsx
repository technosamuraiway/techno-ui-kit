import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { DefaultNotifications } from '@/assets/icons/DefaultNotifications'
import { Button, Select, SelectOptionType, Typography } from '@/components'
import clsx from 'clsx'

import s from './Header.module.scss'

export type HeaderProps<T extends ElementType = 'header'> = {
  as?: T
  changeLanguageBtn: (value: string) => void
  changeLanguageBtnCurrentValue: string
  changeLanguageBtnOptions: SelectOptionType[]
  className?: string
  logInBtnChildren?: ReactNode
  notificationNumber?: number
  onLogInClick?: () => void
  onLogoClick?: () => void
  onSignUpClick?: () => void
  signUpBtnChildren?: ReactNode
  withAuthButtons?: boolean
  withNotifications?: boolean
} & ComponentPropsWithoutRef<T>

export const Header = <T extends ElementType = 'header'>(props: HeaderProps<T>) => {
  const {
    as: Component = 'header',
    changeLanguageBtn,
    changeLanguageBtnCurrentValue,
    changeLanguageBtnOptions,
    className,
    logInBtnChildren = 'Log In',
    notificationNumber = 3,
    onLogInClick,
    onLogoClick = () => {},
    onSignUpClick,
    signUpBtnChildren = 'Sign Up',
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
            <DefaultNotifications className={s.notificationIcon} />
            <span className={s.badge}>{notificationNumber}</span>
          </div>
        )}
        <div className={s.languageSwitcher}>
          <Select
            currentValue={changeLanguageBtnCurrentValue}
            onValueChange={changeLanguageBtn}
            options={changeLanguageBtnOptions}
            selectWidth={'160px'}
          />
        </div>
        {withAuthButtons && (
          <div className={s.authButtons}>
            <Button
              className={s.loginButton}
              onClick={onLogInClick}
              type={'button'}
              variant={'textButton'}
            >
              {logInBtnChildren}
            </Button>
            <Button
              className={s.signUpButton}
              fullWidth
              onClick={onSignUpClick}
              type={'button'}
              variant={'primary'}
            >
              {signUpBtnChildren}
            </Button>
          </div>
        )}
      </div>
    </Component>
  )
}

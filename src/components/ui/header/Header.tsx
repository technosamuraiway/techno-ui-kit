import { ElementType, ReactNode, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Burger } from '@/assets/icons/Burger'
import { DefaultNotifications } from '@/assets/icons/DefaultNotifications'
import { Button, Select, SelectOptionType, Typography } from '@/components'
import clsx from 'clsx'

import s from './Header.module.scss'

export type HeaderProps<T extends ElementType = 'header'> = {
  additionalLogoText?: ReactNode
  additionalLogoTextBold?: ReactNode
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
}

export const Header = <T extends ElementType = 'header'>(props: HeaderProps<T>) => {
  const {
    additionalLogoText,
    additionalLogoTextBold,
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

  const isMobile = useMediaQuery({ query: '(max-width: 360px)' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)

  const toggleModal = () => {
    setIsModalOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <Component className={clsx(s.header, className)} {...rest}>
      <div className={s.container}>
        <div className={s.leftSection} onClick={onLogoClick}>
          <Typography className={s.logo} variant={'large'}>
            Inctagram
          </Typography>
          {additionalLogoText && (
            <Typography className={s.additionalLogoText} variant={'small-text'}>
              {additionalLogoText}
            </Typography>
          )}
          {additionalLogoTextBold && (
            <Typography className={s.additionalLogoTextBold} variant={'semi-bold-small-text'}>
              {additionalLogoTextBold}
            </Typography>
          )}
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
              onlyIcons={isMobile}
              options={changeLanguageBtnOptions}
              selectWidth={isMobile ? undefined : '160px'}
            />
          </div>
          {withAuthButtons && (
            <>
              {isMobile ? (
                <div className={s.menuIcon} onClick={toggleModal}>
                  <Burger />
                </div>
              ) : (
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
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className={clsx(s.popupMenu)} ref={modalRef}>
          <div className={s.modalContent}>
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
              variant={'textButton'}
            >
              {signUpBtnChildren}
            </Button>
          </div>
        </div>
      )}
    </Component>
  )
}

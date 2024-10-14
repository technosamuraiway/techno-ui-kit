import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

export type ButtonVariant =
  | 'iconButton'
  | 'languageButton'
  | 'outline'
  | 'primary'
  | 'secondary'
  | 'textButton'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef((props: Omit<ButtonProps<ElementType>, 'ref'>, ref: any) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={clsx(className, s.button, s[variant], fullWidth && s.fullWidth)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  )
})

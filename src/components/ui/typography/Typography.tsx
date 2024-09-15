import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Typography.module.scss'

export type TypographyVariants =
  | 'bold-text-14'
  | 'bold-text-16'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'large'
  | 'medium-text-14'
  | 'regular-link'
  | 'regular-text-14'
  | 'regular-text-16'
  | 'semi-bold-small-text'
  | 'small-link'
  | 'small-text'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: TypographyVariants
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

export const Typography = <T extends ElementType = 'p'>(
  props: Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> & TextProps<T>
) => {
  const { as: Component = 'p', children, className, variant = 'body1', ...rest } = props

  return (
    <Component {...rest} className={clsx(s[variant], className)}>
      {children}
    </Component>
  )
}

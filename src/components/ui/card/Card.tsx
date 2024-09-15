import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type CardComponent = <T extends ElementType = 'div'>(
  props: { ref?: Ref<ElementRef<T>> } & CardProps<T>
) => ReactNode

export const Card: CardComponent = forwardRef(({ as, children, className, ...rest }, ref) => {
  const Component: ElementType = as ?? 'div'

  return (
    <Component className={clsx(s.card, className)} {...rest} ref={ref}>
      {children}
    </Component>
  )
})

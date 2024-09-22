import { CSSProperties, ComponentPropsWithRef, ReactNode } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropDown.module.scss'

export type DropdownProps = {
  style?: CSSProperties
  trigger: ReactNode
  triggerClassName?: string
} & ComponentPropsWithRef<typeof D.Root>

const Root = ({ children, style, trigger, triggerClassName, ...rest }: DropdownProps) => {
  return (
    <D.Root {...rest}>
      <D.Trigger asChild>
        <button className={clsx(triggerClassName, s.trigger)} style={style} type={'button'}>
          {trigger}
        </button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={'end'} className={s.content} sideOffset={5}>
          {children}
          <D.Arrow asChild>
            <div className={s.arrow} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}

type ItemProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithRef<typeof D.Item>

const Item = ({ children, className, ...rest }: ItemProps) => (
  <D.Item {...rest} className={clsx(s.item, className)}>
    {children}
  </D.Item>
)

const Separator = () => <D.Separator className={s.separator} />

export const Dropdown = {
  Item,
  Root,
  Separator,
}

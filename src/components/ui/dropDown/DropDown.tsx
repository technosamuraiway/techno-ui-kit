import { CSSProperties, ComponentPropsWithRef, ReactNode } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropDown.module.scss'

export type DropdownProps = {
  arrowCN?: string
  contentAlign?: 'center' | 'end' | 'start'
  contentCN?: string
  style?: CSSProperties
  trigger: ReactNode
  triggerCN?: string
} & ComponentPropsWithRef<typeof D.Root>

const Root = ({
  arrowCN,
  children,
  contentAlign = 'end',
  contentCN,
  style,
  trigger,
  triggerCN,
  ...rest
}: DropdownProps) => {
  return (
    <D.Root {...rest}>
      <D.Trigger asChild>
        <button className={clsx(s.trigger, triggerCN)} style={style} type={'button'}>
          {trigger}
        </button>
      </D.Trigger>

      <D.Portal>
        <D.Content align={contentAlign} className={clsx(s.content, contentCN)} sideOffset={5}>
          {children}
          <D.Arrow asChild>
            <div className={clsx(s.arrow, arrowCN)} />
          </D.Arrow>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}

type ItemProps = {
  children: ReactNode
} & ComponentPropsWithRef<typeof D.Item>

const Item = ({ children, className, ...rest }: ItemProps) => (
  <D.Item className={clsx(s.item, className)} {...rest}>
    {children}
  </D.Item>
)

type SeparatorProps = {} & ComponentPropsWithRef<typeof D.Separator>

const Separator = ({ className, ...rest }: SeparatorProps) => (
  <D.Separator className={clsx(s.separator, className)} {...rest} />
)

export const Dropdown = {
  Item,
  Root,
  Separator,
}

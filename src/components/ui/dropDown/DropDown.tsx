import { CSSProperties, ComponentPropsWithRef, ReactNode } from 'react'

import * as D from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './DropDown.module.scss'

export type DropdownProps = {
  arrowCN?: string
  avoidCollisions?: boolean
  contentAlign?: 'center' | 'end' | 'start'
  contentCN?: string
  contentSide?: 'bottom' | 'left' | 'right' | 'top'
  style?: CSSProperties
  trigger: ReactNode
  triggerCN?: string
  withArrow?: boolean
} & ComponentPropsWithRef<typeof D.Root>

const Root = ({
  arrowCN,
  avoidCollisions = true,
  children,
  contentAlign = 'end',
  contentCN,
  contentSide = 'bottom',
  style,
  trigger,
  triggerCN,
  withArrow = true,
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
        <D.Content
          align={contentAlign}
          avoidCollisions={avoidCollisions}
          className={clsx(s.content, contentCN)}
          side={contentSide}
          sideOffset={5}
        >
          {children}
          {withArrow && (
            <D.Arrow asChild>
              <div className={clsx(s.arrow, arrowCN)} />
            </D.Arrow>
          )}
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

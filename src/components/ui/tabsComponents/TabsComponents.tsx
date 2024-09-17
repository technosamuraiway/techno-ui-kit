import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components'
import * as T from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './TabsComponents.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  /* A unique value that associates the trigger with a content. */
  value: string
}

type TabsColorType = 'blue' | 'dark'

export type TabsProps = {
  color: TabsColorType
  defaultValue?: string
  listClassName?: string
  notFullWidth?: boolean
  onClick?: () => void
  tabs: TabType[]
  titleClassName?: string
  triggerClassName?: string
  /* The controlled value of the tab to activate. Should be used in conjunction with onValueChange */
  value?: string
} & ComponentPropsWithoutRef<typeof T.Root>

const Root = ({
  children,
  className,
  color = 'dark',
  defaultValue,
  listClassName,
  notFullWidth,
  onClick,
  onValueChange,
  tabs,
  titleClassName,
  triggerClassName,
  value,
  ...rest
}: TabsProps) => {
  return (
    <T.Root
      className={clsx(s.root, className)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
      {...rest}
    >
      <T.List aria-label={'brief description'} className={clsx(s.list, listClassName)}>
        {tabs.map(tab => (
          <T.Trigger
            className={clsx(
              s.trigger,
              notFullWidth && s.triggerNotFullWidth,
              s[color],
              triggerClassName
            )}
            disabled={tab.disabled}
            key={`Tab ${tab.value} id`}
            onClick={onClick}
            value={tab.value}
          >
            <Typography className={titleClassName} variant={'h3'}>
              {tab.title}
            </Typography>
          </T.Trigger>
        ))}
      </T.List>
      {children}
    </T.Root>
  )
}

type ContentProps = {
  /* A unique value that associates the trigger with a content. */
  value: string
} & ComponentPropsWithoutRef<typeof T.Content>

const Content = ({ children, className, value, ...rest }: ContentProps) => {
  return (
    <T.Content className={clsx(s.content, className)} value={value} {...rest}>
      {children}
    </T.Content>
  )
}

//========================================================================================

export const TabsComponents = {
  Content,
  Root,
}

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import { CheckboxIcon } from '../../../assets/icons/checkboxIcon'
import { Typography } from '../typography'

export type CheckboxProps = {
  checked: boolean
  className?: string
  id?: string
  label?: string
  onCheckedChange: (checked: boolean) => void
  position?: 'default' | 'left'
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'className'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (
    {
      checked,
      className,
      disabled,
      id,
      label,
      onCheckedChange,
      position = 'default',
      ...restProps
    },
    ref
  ) => (
    <div className={clsx(s.container, s[position])}>
      <LabelRadix.Root asChild>
        <Typography
          aria-disabled={disabled}
          as={'label'}
          className={s.label}
          variant={'regular-text-14'}
        >
          <div aria-disabled={disabled} className={s.buttonWrapper}>
            <CheckboxRadix.Root
              {...restProps}
              checked={checked}
              className={s.root + ' ' + (className ?? '')}
              disabled={disabled}
              id={id}
              onCheckedChange={onCheckedChange}
              ref={ref}
            >
              {checked && (
                <CheckboxRadix.Indicator className={s.indicator}>
                  <CheckboxIcon />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
)

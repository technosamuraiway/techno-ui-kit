import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './RadioGroup.module.scss'

type Options = {
  id: string
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  disabled?: boolean
  onValueChange: (value: string) => void
  options: Options[]
  value: string
} & ComponentPropsWithRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ className, disabled = false, onValueChange, options, value, ...rest }, ref) => {
    return (
      <Radio.Root
        className={clsx(className, s.radioRoot)}
        {...rest}
        disabled={disabled}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
      >
        {options.map(el => (
          <div className={s.radioItemWrapper} key={el.id}>
            <Radio.Item className={s.radioItem} disabled={disabled} id={el.id} value={el.value}>
              <Radio.Indicator className={s.RadioGroupIndicator} />
            </Radio.Item>
            <label className={`${s.radioLabel} ${disabled ? s.disabledLabel : ''}`} htmlFor={el.id}>
              {el.label}
            </label>
          </div>
        ))}
      </Radio.Root>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

import { CSSProperties, ComponentPropsWithRef, ElementRef, forwardRef } from 'react'

import * as Radio from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './RadioGroup.module.scss'

type Options = {
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  disabled?: boolean
  itemClassName?: string
  itemStyle?: CSSProperties
  onValueChange: (value: string) => void
  options: Options[]
  value: string
} & ComponentPropsWithRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  (
    {
      className,
      disabled = false,
      itemClassName,
      itemStyle,
      onValueChange,
      options,
      value,
      ...rest
    },
    ref
  ) => {
    return (
      <Radio.Root
        className={clsx(className, s.radioRoot)}
        {...rest}
        disabled={disabled}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
      >
        {options.map(el => {
          const id = el.value

          return (
            <div className={clsx(itemClassName, s.radioItemWrapper)} key={id} style={itemStyle}>
              <Radio.Item className={s.radioItem} disabled={disabled} id={id} value={el.value}>
                <Radio.Indicator className={s.RadioGroupIndicator} />
              </Radio.Item>
              <label className={`${s.radioLabel} ${disabled ? s.disabledLabel : ''}`} htmlFor={id}>
                {el.label}
              </label>
            </div>
          )
        })}
      </Radio.Root>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

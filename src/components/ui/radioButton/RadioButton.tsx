// src/components/ui/radioButton/RadioButton.tsx

import { forwardRef } from 'react'

import clsx from 'clsx'

import s from './RadioButton.module.scss'

interface IProps {
  disabled?: boolean
  groupName: string
  id: string
  isChecked: boolean
  name: string
  onChange: (value: string) => void
  position?: 'default' | 'left'
  value: string
}

export const RadioButton = forwardRef<HTMLInputElement, IProps>(
  (
    {
      disabled = false,
      groupName,
      id,
      isChecked,
      name,
      onChange,
      position = 'default',
      value,
      ...rest
    },
    ref
  ) => {
    const handleChange = () => {
      if (!disabled) {
        onChange(value)
      }
    }

    return (
      <div className={clsx(s.radioButton, s[position])}>
        <input
          checked={isChecked}
          className={s.radioInput}
          disabled={disabled}
          id={id}
          name={groupName}
          onChange={handleChange}
          ref={ref}
          type={'radio'}
          value={value}
          {...rest}
        />
        <label className={s.radioLabel} htmlFor={id}>
          {name}
        </label>
      </div>
    )
  }
)

RadioButton.displayName = 'RadioButton'

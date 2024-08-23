import React, { ComponentPropsWithoutRef, ElementType, useState } from 'react'

import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'

import styles from './selectBox.module.scss'

import { DownIcon } from '../../../assets/icons/downIcon'
import { UpIcon } from '../../../assets/icons/upIcon'

type SelectOption = {
  IconComponent?: React.FC
  name: string
}

export type SelectBoxProps<T extends ElementType = 'div'> = {
  as?: T
  disabled?: boolean
  onSelectChange?: (value: string) => void
  options: SelectOption[]
  variant?: 'default' | 'withFlags'
} & ComponentPropsWithoutRef<T>

export const SelectBox = <T extends ElementType = 'div'>(
  props: Omit<ComponentPropsWithoutRef<T>, keyof SelectBoxProps<T>> & SelectBoxProps<T>
) => {
  const {
    as: Component = 'div',
    disabled,
    onSelectChange,
    options,
    variant = 'default',
    ...rest
  } = props
  const [selectedOption, setSelectedOption] = useState(options[0].name) // Default to first option
  const [isOpen, setIsOpen] = useState(false)

  const handleValueChange = (value: string) => {
    setSelectedOption(value)
    if (onSelectChange) {
      onSelectChange(value)
    }
  }

  return (
    <Component {...rest} className={clsx(styles.container, styles[variant])}>
      <Select.Root
        disabled={disabled}
        onOpenChange={open => setIsOpen(open)}
        onValueChange={handleValueChange}
        value={selectedOption}
      >
        <Select.Trigger
          className={`${styles.trigger} ${styles[`${variant}Trigger`]}`}
          disabled={disabled}
        >
          <Select.Value asChild>
            <div className={styles.languageValue}>
              {options.map(option =>
                option.name === selectedOption ? (
                  <div className={styles.selectedLanguage} key={option.name}>
                    {option.IconComponent && <option.IconComponent />}
                    <span>{selectedOption}</span>
                  </div>
                ) : null
              )}
            </div>
          </Select.Value>
          <Select.Icon className={styles.icon}>{isOpen ? <UpIcon /> : <DownIcon />}</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={styles.content} position={'popper'}>
            <Select.Viewport className={`${styles.viewport} ${styles[`${variant}Viewport`]}`}>
              {options.map(option => (
                <Select.Item className={styles.item} key={option.name} value={option.name}>
                  <Select.ItemText>
                    <div className={styles.languageItem}>
                      {option.IconComponent && <option.IconComponent />}
                      <span>{option.name}</span>
                    </div>
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </Component>
  )
}

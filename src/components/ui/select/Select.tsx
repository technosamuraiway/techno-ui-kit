import { CSSProperties, ComponentPropsWithRef, useState } from 'react'

import { DownIcon } from '@/assets/icons/downIcon'
import { UpIcon } from '@/assets/icons/upIcon'
import * as S from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

/*
 *  1. для выравнивания ширины trigger и content => тегу Content добавили атрибут position={'popper'}
 *     в стилях для s.content добавить => width: var(--radix-select-trigger-width); max-height: var(--radix-select-content-available-height)
 *  2. именно тег Viewport добавляет функционал навигации и выбора клавиатурой
 * */

export type OptionType = {
  disabled?: boolean
  icon?: { png: string; webp: string }
  label: number | string
  value: string
}

interface iSelect extends ComponentPropsWithRef<typeof S.Root> {
  currentValue?: string
  disabled?: boolean
  options: OptionType[]
  selectStyle?: CSSProperties
  triggerStyle?: CSSProperties
}

export const Select = ({
  currentValue,
  disabled,
  onValueChange,
  options,
  selectStyle,
  triggerStyle,
  ...rest
}: iSelect) => {
  const [isOpen, setIsOpen] = useState(false)
  const option = options.find(option => option.value === currentValue)

  return (
    <S.Root
      disabled={disabled}
      onOpenChange={setIsOpen}
      onValueChange={onValueChange}
      value={currentValue}
      {...rest}
    >
      <S.Trigger className={clsx(s.trigger, triggerStyle)}>
        {option?.icon && <SelectIcon icon={option?.icon} value={option?.value} />}
        <S.Value>{option?.label}</S.Value>
        <S.Icon>{isOpen ? <UpIcon /> : <DownIcon />}</S.Icon>
      </S.Trigger>

      <S.Portal>
        <S.Content className={clsx(s.content, selectStyle)} position={'popper'} side={'bottom'}>
          <S.Viewport>
            {options.map(option => (
              <S.Item
                className={s.item}
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.icon && <SelectIcon icon={option.icon} value={option.value} />}
                <S.ItemText>{option.label}</S.ItemText>
              </S.Item>
            ))}
          </S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
  )
}

/* SelectIcon для отображения иконка в s.Trigger и S.Item */
const SelectIcon = ({ icon, value }: Omit<OptionType, 'label'>) => {
  /* Проверяем наличие icon и value, чтобы избежать обращения к свойствам undefined */
  if (!icon) {
    return null
  }

  const { png, webp } = icon

  return (
    <S.Icon>
      <picture>
        <source srcSet={webp} type={'image/webp'} />
        <img alt={`${value} - flag`} src={png} />
      </picture>
    </S.Icon>
  )
}

import { CSSProperties, ComponentPropsWithRef, useState } from 'react'

import { DownIcon } from '@/assets/icons/downIcon'
import { UpIcon } from '@/assets/icons/upIcon'
import { Typography } from '@/components'
import * as S from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

/*
 * ⛔ Конфигурация размеров select происходит через props => selectHeight и selectWidth
 *     selectHeight - высота выпадающего списка
 *     selectWidth - ирина trigger и выпадающего списка
 *
 *  1. для выравнивания ширины trigger и content => тегу Content добавили атрибут position={'popper'}
 *     в стилях для s.content добавить => width: var(--radix-select-trigger-width); max-height: var(--radix-select-content-available-height)
 *  2. именно тег Viewport добавляет функционал навигации и выбора клавиатурой
 *  3. тег picture увеличивает ширину своего тега, т.е. если img имеет ширину 24px, то picture становиться себе ширину 32px
 *     => будем управлять размерами иконок через props
 * */

export type OptionType = {
  disabled?: boolean
  icon?: { png: string; webp: string }
  label: number | string
  value: string
}

interface iSelect extends ComponentPropsWithRef<typeof S.Root> {
  containerStyle?: CSSProperties
  contentStyle?: CSSProperties
  currentValue: string
  disabled?: boolean
  label?: string
  labelStyle?: CSSProperties
  options: OptionType[]
  selectHeight?: string
  selectWidth?: string
  triggerStyle?: CSSProperties
}

export const Select = ({
  containerStyle,
  contentStyle,
  currentValue,
  disabled,
  label,
  labelStyle,
  onValueChange,
  options,
  selectHeight,
  selectWidth,
  triggerStyle,
  ...rest
}: iSelect) => {
  const [isOpen, setIsOpen] = useState(false)
  const optionIsNotFind = { label: 'not-found', value: 'not-found' }
  const option = options.find(option => option.value === currentValue) || optionIsNotFind

  return (
    <div className={clsx(s.container, containerStyle)} style={{ width: selectWidth }}>
      <Typography
        as={'label'}
        className={clsx(s.label, labelStyle)}
        htmlFor={`${label?.toLowerCase()}`}
        variant={'regular-text-14'}
      >
        {label}
      </Typography>

      <S.Root
        disabled={disabled}
        onOpenChange={setIsOpen}
        onValueChange={onValueChange}
        value={currentValue}
        {...rest}
      >
        <S.Trigger className={clsx(s.trigger, triggerStyle)}>
          <SelectOption {...option} />
          {isOpen ? <UpIcon /> : <DownIcon />}
        </S.Trigger>

        <S.Portal>
          <S.Content
            className={clsx(s.content, contentStyle)}
            position={'popper'}
            side={'bottom'}
            style={{ height: selectHeight }}
          >
            <S.Viewport>
              {options.map(item => (
                <S.Item
                  className={s.item}
                  disabled={item.disabled}
                  key={item.value}
                  value={item.value}
                >
                  <SelectOption {...item} />
                </S.Item>
              ))}
            </S.Viewport>
          </S.Content>
        </S.Portal>
      </S.Root>
    </div>
  )
}

/* SelectOption для отображение контента в Trigger и Item */
const SelectOption = ({ icon, label, value }: OptionType) => {
  return (
    <>
      {icon && (
        <picture className={s.picture}>
          <source srcSet={icon?.webp} type={'image/webp'} />
          <img alt={`${value} - flag`} src={icon?.png} />
        </picture>
      )}

      <Typography as={'span'} variant={'regular-text-14'}>
        {label}
      </Typography>
    </>
  )
}

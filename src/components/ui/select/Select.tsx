import { CSSProperties, ComponentPropsWithRef, useMemo, useState } from 'react'

import { DownIcon } from '@/assets/icons/downIcon'
import { UpIcon } from '@/assets/icons/upIcon'
import { Typography } from '@/components'
import { Scrollbar } from '@/components/ui/scrollBar/Scrollbar'
import * as S from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

/*
 *  1. Конфигурация размеров select происходит через props => selectHeight и selectWidth
 *     selectHeight - высота выпадающего списка
 *     selectWidth - ирина trigger и выпадающего списка
 *
 *  2. для выравнивания ширины trigger и content => тегу Content добавили атрибут position={'popper'}
 *     в стилях для s.content добавить => width: var(--radix-select-trigger-width); max-height: var(--radix-select-content-available-height)
 *
 *  3. именно тег Viewport добавляет функционал навигации и выбора клавиатурой
 *
 *  4. тег picture увеличивает ширину своего тега, т.е. если img имеет ширину 24px, то picture становиться себе ширину 32px
 *     => будем управлять размерами иконок через props
 *
 *  5. чтобы избежать лишней обертки div, когда label не предоставлен, и в то же время сохраняет функциональность компонента,
 *     когда label присутствует =>
 *                                  5.1 Выносим логику S.Root в отдельный компонент SelectRoot
 *                                  5.2 В основном компоненте Select мы проверяем наличие label
 *                                  5.3 Если label есть, мы рендерим div с label и SelectRoot
 *                                  5.4 Если label отсутствует, мы просто рендерим SelectRoot без дополнительной обертки.
 *
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
  /* 🟢фича => чтобы при клике по label открывался SelectRoot */

  const selectRoot = (
    <SelectRoot
      contentStyle={contentStyle}
      currentValue={currentValue}
      disabled={disabled}
      onValueChange={onValueChange}
      options={options}
      selectHeight={selectHeight}
      selectWidth={label ? undefined : selectWidth}
      triggerStyle={triggerStyle}
      {...rest}
    />
  )

  if (label) {
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
        {selectRoot}
      </div>
    )
  }

  return selectRoot
}

interface iSelectRoot extends Omit<iSelect, 'containerStyle' | 'label' | 'labelStyle'> {}

const SelectRoot = ({
  contentStyle,
  currentValue,
  disabled,
  onValueChange,
  options,
  selectHeight,
  selectWidth,
  triggerStyle,
  ...rest
}: iSelectRoot) => {
  const [isOpen, setIsOpen] = useState(false)

  /* 🟢 Оптимизация
   * Создадим функцию для преобразования массива options в объект.
   * Используем хук useMemo для мемоизации этого объекта.
   * Используем мемоизированный объект для быстрого поиска option.
   * */
  const optionsMemo = useMemo(() => {
    return options.reduce(
      (acc, item) => {
        acc[item.value] = { ...item }

        return acc
      },
      {} as Record<string, OptionType>
    )
  }, [options])
  /* Достаем значение напрямую для отобажения в trigger */
  const option = optionsMemo[currentValue]

  return (
    <S.Root
      disabled={disabled}
      onOpenChange={setIsOpen}
      onValueChange={onValueChange}
      value={currentValue}
      {...rest}
    >
      <S.Trigger className={clsx(s.trigger, triggerStyle)} style={{ width: selectWidth }}>
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
          <S.Viewport asChild>
            <Scrollbar>
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
            </Scrollbar>
          </S.Viewport>
        </S.Content>
      </S.Portal>
    </S.Root>
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

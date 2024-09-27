import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { CloseIcon, DefaultSearchIcon, EyeClosedIcon, EyeIcon } from '@/assets/icons'
import { Typography } from '@/components'
import clsx from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  error?: string
  inputClassName?: string
  label?: string
  onChangeValue?: (value: string) => void
  withStar?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  children,
  error,
  inputClassName,
  label,
  onChange,
  onChangeValue,
  type = 'text',
  value,
  withStar = false,
  ...rest
}: TextFieldProps) => {
  const [show, setShow] = useState(false)
  const showPass = () => setShow(prev => !prev)

  const isShowClearButton = type === 'search' && value !== undefined && value.toString().length > 0
  const showError = !!error && error.length > 0
  const classInput = clsx(s[type], s.input, showError && s.error, inputClassName)

  const clearButton = onChange && (
    <button
      className={s.buttonIcon}
      onClick={() => onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)}
      type={'button'}
    >
      <CloseIcon />
    </button>
  )

  const eyeButton = type === 'password' && (
    <button className={s.buttonIcon} onMouseDown={showPass} onMouseUp={showPass} type={'button'}>
      {show ? <EyeIcon height={24} width={24} /> : <EyeClosedIcon height={24} width={24} />}
    </button>
  )

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }

  return (
    <div className={clsx(s.box, rest.className)}>
      <Typography
        as={'label'}
        className={s.label}
        htmlFor={`${label}-id`}
        variant={'regular-text-14'}
      >
        {type === 'search' ? '' : label}
        {withStar && <span className={s.span}>*</span>}
      </Typography>
      <div className={s.inputBox}>
        {type === 'search' && <DefaultSearchIcon className={s.searchIcon} />}
        <input
          {...rest}
          className={classInput}
          id={`${label}-id`}
          onChange={onChangeValueHandler}
          type={(show && 'text') || type}
          value={value}
        />
        {isShowClearButton && clearButton}
        {eyeButton}
      </div>
      {showError && (
        <Typography as={'span'} className={s.error} variant={'regular-text-14'}>
          {error}
        </Typography>
      )}
    </div>
  )
}

import { ComponentPropsWithoutRef, ElementRef, ElementType, forwardRef } from 'react'

import clsx from 'clsx'

import s from './TextArea.module.scss'

export type TextAreaProps<T extends ElementType = 'textarea'> = {
  as?: T
  errorText?: string
  isDisabled?: boolean
  isError?: boolean
} & ComponentPropsWithoutRef<T>

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps<'textarea'>>(
  (
    {
      as: Component = 'textarea',
      className,
      errorText,
      isDisabled = false,
      isError = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx(s.container, className, { [s.disabled]: isDisabled, [s.error]: isError })}
      >
        <Component
          className={clsx(s.textArea, { [s.errorBorder]: isError })}
          disabled={isDisabled}
          ref={ref}
          {...props}
        />
        {isError && errorText && <div className={s.errorText}>{errorText}</div>}
      </div>
    )
  }
)

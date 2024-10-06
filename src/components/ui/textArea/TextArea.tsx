import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import clsx from 'clsx'

import s from './TextArea.module.scss'

export type TextAreaProps = {
  errorText?: string
  errorTextCN?: string
  isDisabled?: boolean
  isError?: boolean
  labelCN?: string
  textAreaLabelText?: string
  wrapperCN?: string
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>(
  (
    {
      className,
      errorText,
      errorTextCN,
      isDisabled = false,
      isError = false,
      labelCN,
      textAreaLabelText,
      wrapperCN,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(s.wrapper, wrapperCN, isDisabled && s.disabled, isError && s.error)}>
        <Typography
          as={'label'}
          className={clsx(s.textAreaLabel, labelCN)}
          htmlFor={`${textAreaLabelText} - id`}
          variant={'regular-text-14'}
        >
          {textAreaLabelText}
        </Typography>
        <textarea
          className={clsx(s.textArea, isError && s.errorBorder, className)}
          disabled={isDisabled}
          id={`${textAreaLabelText} - id`}
          ref={ref}
          {...props}
        />
        {isError && errorText && (
          <span className={clsx(s.errorText, errorTextCN)}>{errorText}</span>
        )}
      </div>
    )
  }
)

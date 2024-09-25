import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CloseIcon } from '@/assets/icons'
import { Button, ButtonVariant, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

// 'L' - 644px; 'M' - 492px(486px); 'S' - 438px; 'XL' - 972px; 'XS' - 378px; 'XXS' - 330px
export type ModalSize = 'L' | 'M' | 'S' | 'XL' | 'XS' | 'XXS'

interface IProps extends ComponentPropsWithoutRef<typeof Dialog.Root> {
  children: ReactNode
  closeButtonClassName?: string
  contentClassName?: string
  headerClassName?: string
  headerTitle?: string
  modalSize?: ModalSize
  overlayClassName?: string
  showHeader?: boolean
  triggerChildren?: ReactNode
  triggerClassName?: string
  triggerVariant?: ButtonVariant
}

export const Modal = ({
  children,
  closeButtonClassName,
  contentClassName,
  headerClassName,
  headerTitle,
  modalSize = 'S',
  overlayClassName,
  showHeader = true,
  triggerChildren,
  triggerClassName,
  triggerVariant = 'primary',
  ...rest
}: IProps) => {
  return (
    <Dialog.Root {...rest}>
      {triggerChildren && (
        <Dialog.Trigger asChild>
          <Button className={triggerClassName} variant={triggerVariant}>
            {triggerChildren}
          </Button>
        </Dialog.Trigger>
      )}

      <Dialog.Portal>
        <Dialog.Overlay className={clsx(s.overlay, overlayClassName)} />
        <Dialog.Content
          aria-describedby={undefined}
          className={clsx(s.content, s[modalSize], contentClassName)}
        >
          {showHeader && (
            <div className={clsx(s.header, headerClassName)}>
              <Dialog.Title asChild>
                <Typography as={'h1'} variant={'h1'}>
                  {headerTitle}
                </Typography>
              </Dialog.Title>
              <Dialog.Close className={clsx(s.closeButton, closeButtonClassName)}>
                <CloseIcon />
              </Dialog.Close>
            </div>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

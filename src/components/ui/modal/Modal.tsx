import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CloseIcon } from '@/assets/icons/closeIcon'
import { Button, ButtonVariant, Typography } from '@/components'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './Modal.module.scss'

type ModalSize = 'L' | 'M' | 'S' | 'XL' | 'XS'

export interface IProps extends ComponentPropsWithoutRef<typeof Dialog.Root> {
  children: ReactNode
  closeButtonClassName?: string
  contentClassName?: string
  headerTitle?: string
  modalSize?: ModalSize
  overlayClassName?: string
  triggerChildren: ReactNode
  triggerClassName?: string
  triggerVariant?: ButtonVariant
}

export const Modal = ({
  children,
  closeButtonClassName,
  contentClassName,
  headerTitle,
  modalSize = 'S',
  overlayClassName,
  triggerChildren,
  triggerClassName,
  triggerVariant = 'primary',
  ...rest
}: IProps) => {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild>
        <Button className={triggerClassName} variant={triggerVariant}>
          {triggerChildren}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={clsx(s.overlay, overlayClassName)}>
          <Dialog.Content className={clsx(s.content, contentClassName)}>
            <div className={s.header}>
              <Dialog.Title asChild>
                <Typography as={'h1'} variant={'h1'}>
                  {headerTitle}
                </Typography>
              </Dialog.Title>
              <Dialog.Close className={clsx(s.closeButton, closeButtonClassName)}>
                <CloseIcon />
              </Dialog.Close>
            </div>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

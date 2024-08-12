import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { CloseIcon } from '../../../assets/icons/closeIcon'
import { Typography } from '../typography'

type ModalProps = {
  children: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Dialog>
export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.content}>
            <div className={s.header}>
              <Dialog.Title asChild>
                <Typography as={'h1'} variant={'h1'}>
                  {title}
                </Typography>
              </Dialog.Title>
              <Dialog.Close className={s.closeButton}>
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

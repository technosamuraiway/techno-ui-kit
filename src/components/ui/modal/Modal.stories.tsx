import type { Meta, StoryObj } from '@storybook/react'

import { ReactNode, useState } from 'react'

import { Button, ModalSize, Typography } from '@/components'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof meta>

const ModalWrapper = ({
  modalSize,
  triggerChildren,
}: {
  modalSize: ModalSize
  triggerChildren?: ReactNode
}) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      headerTitle={'Story Modal'}
      modalSize={modalSize}
      onOpenChange={setOpenModal}
      open={openModal}
      triggerChildren={triggerChildren}
    >
      <div style={{ padding: '30px 24px' }}>
        <Typography variant={'bold-text-16'}>
          Are you really want to log out of your account “Epam@epam.com”?
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'flex-end',
          margin: '0 24px 36px 0',
        }}
      >
        <Button onClick={() => setOpenModal(false)} variant={'outline'}>
          Yes
        </Button>
        <Button onClick={() => setOpenModal(false)}>No</Button>
      </div>
    </Modal>
  )
}

export const DefaultModal: Story = {
  render: () => <ModalWrapper modalSize={'S'} triggerChildren={'Open S Modal'} />,
}

export const XSModal: Story = {
  render: () => <ModalWrapper modalSize={'XS'} triggerChildren={'Open XS Modal'} />,
}

export const LModal: Story = {
  render: () => <ModalWrapper modalSize={'L'} triggerChildren={'Open L Modal'} />,
}

export const MModal: Story = {
  render: () => <ModalWrapper modalSize={'M'} triggerChildren={'Open M Modal'} />,
}

export const XLModal: Story = {
  render: () => <ModalWrapper modalSize={'XL'} triggerChildren={'Open XL Modal'} />,
}

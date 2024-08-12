import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Typography } from '../typography'
import { Modal } from './Modal'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          Modal content
        </Modal>
      </>
    )
  },
}

export const ModalWithText: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Log Out',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Logout
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
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
            <Button onClick={() => setOpen(false)} variant={'outline'}>
              Yes
            </Button>
            <Button onClick={() => setOpen(false)}>No</Button>
          </div>
        </Modal>
      </>
    )
  },
}

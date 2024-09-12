import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { IProps, Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof meta>

const ModalWrapper = ({ children, headerTitle, triggerChildren }: IProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Modal
      headerTitle={headerTitle}
      onOpenChange={setOpenModal}
      open={openModal}
      triggerChildren={triggerChildren}
    >
      {children}
    </Modal>
  )
}

export const Default: Story = {
  render: () => (
    <ModalWrapper headerTitle={'Default Modal'} triggerChildren={'Open Modal'}>
      Hello Modal
    </ModalWrapper>
  ),
}
//
// export const ModalWithText: Story = {
//   args: {
//     children: 'Modal content',
//     open: true,
//     title: 'Log Out',
//   },
//   render: args => {
//     const [open, setOpen] = useState(false)
//
//     return (
//       <>
//         <Button onClick={() => setOpen(true)} variant={'primary'}>
//           Logout
//         </Button>
//         <Modal {...args} onOpenChange={setOpen} open={open}>
//           <div style={{ padding: '30px 24px' }}>
//             <Typography variant={'bold-text-16'}>
//               Are you really want to log out of your account “Epam@epam.com”?
//             </Typography>
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               gap: '24px',
//               justifyContent: 'flex-end',
//               margin: '0 24px 36px 0',
//             }}
//           >
//             <Button onClick={() => setOpen(false)} variant={'outline'}>
//               Yes
//             </Button>
//             <Button onClick={() => setOpen(false)}>No</Button>
//           </div>
//         </Modal>
//       </>
//     )
//   },
// }

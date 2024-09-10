import type { Meta } from '@storybook/react'

import { CustomVerticalScrollBar } from './CustomVerticalScrollBar'

const meta: Meta<typeof CustomVerticalScrollBar> = {
  component: CustomVerticalScrollBar,
  tags: ['autodocs'],
  title: 'Components/CustomVerticalScrollBar',
}

export default meta

const textListToShow = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35,
]

const WrapperVertical = ({ isHide }: { isHide?: boolean }) => {
  return (
    <div style={{ background: 'gray', borderRadius: '5px', height: '200px', width: '300px' }}>
      <CustomVerticalScrollBar isHide={isHide}>
        {textListToShow.map(item => (
          <div key={item}>{item}</div>
        ))}
      </CustomVerticalScrollBar>
    </div>
  )
}

export const WithHideScrollBar = {
  render: () => <WrapperVertical isHide />,
}

export const WithNotHideScrollBar = {
  render: () => <WrapperVertical />,
}

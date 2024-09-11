import type { Meta } from '@storybook/react'

import { Scrollbar } from './Scrollbar'

const meta: Meta<typeof Scrollbar> = {
  component: Scrollbar,
  tags: ['autodocs'],
  title: 'Components/Scrollbar',
}

export default meta

const textListToShow = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31, 32, 33, 34, 35,
]

export const WrapperVertical = {
  render: () => (
    <div style={{ background: 'gray', borderRadius: '5px', height: '200px', width: '300px' }}>
      <Scrollbar maxHeight={200}>
        {textListToShow.map(item => (
          <div key={item}>{item}</div>
        ))}
      </Scrollbar>
    </div>
  ),
}

export const WrapperHorizontal = {
  render: () => (
    <div style={{ background: 'gray', borderRadius: '5px', height: '200px', width: '300px' }}>
      <Scrollbar maxHeight={300}>
        {textListToShow.map(item => (
          <span key={item}>{item}</span>
        ))}
      </Scrollbar>
    </div>
  ),
}

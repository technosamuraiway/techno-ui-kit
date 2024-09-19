import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './Slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

const WrapperTwoThumb = () => {
  const [valueLeft, setValueLeft] = useState(25)
  const [valueRight, setValueRight] = useState(75)

  const valueChangeHandler = (value: number[]) => {
    setValueLeft(value[0])
    setValueRight(value[1])
  }

  return (
    <Slider
      isSingle={false}
      minStepsBetweenThumbs={2}
      onValueChange={valueChangeHandler}
      step={2}
      value={[valueLeft, valueRight]}
    />
  )
}

export const DefaultTwoThumbSlider: Story = {
  render: () => <WrapperTwoThumb />,
}

const WrapperOneThumb = () => {
  const [value, setValue] = useState(2)

  const valueChangeHandler = (value: number[]) => {
    setValue(value[0])
  }

  return <Slider onValueChange={valueChangeHandler} step={1} value={[value]} />
}

export const DefaultOneThumbSlider: Story = {
  render: () => <WrapperOneThumb />,
}

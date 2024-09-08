import type { Meta } from '@storybook/react'

import { FC, useState } from 'react'

import EnFlagPng from '../../../assets/icons/flags/enFlag.png'
import EnFlagWebp from '../../../assets/icons/flags/enFlag.webp'
import RuFlagPng from '../../../assets/icons/flags/ruFlag.png'
import RuFlagWebp from '../../../assets/icons/flags/ruFlag.webp'
import { OptionType, Select } from './Select'

/* options как пример */
const options: OptionType[] = [
  { label: 'English', value: 'en' },
  { label: 'Russian', value: 'ru' },
]

/* options как пример + иконки*/
const optionsWitIcons: OptionType[] = [
  { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
  { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Russian', value: 'ru' },
]

/* options с один заблокиравонным вариантом */
const optionsWithDisabledOption: OptionType[] = [
  { label: 'English', value: 'en' },
  { disabled: true, label: 'Russian', value: 'ru' },
]

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

/* компонент-обертка, имитирует комопнент, в котором будет применятся Select */
const Wrapper: FC<{ isDisabled?: boolean; options: OptionType[] }> = ({ isDisabled, options }) => {
  const [currentValue, setCurrentValue] = useState('en')

  return (
    <Select
      currentValue={currentValue}
      disabled={isDisabled}
      onValueChange={setCurrentValue}
      options={options}
    />
  )
}

/* сама компонента + пропсы для компоненты */
export const Default = {
  render: () => <Wrapper options={options} />,
}

export const WithIcons = {
  render: () => <Wrapper options={optionsWitIcons} />,
}

export const Disabled = {
  render: () => <Wrapper isDisabled options={options} />,
}

export const WithDisabledItem = {
  render: () => <Wrapper options={optionsWithDisabledOption} />,
}

import type { Meta } from '@storybook/react'

import { FC, useState } from 'react'

import EnFlagPng from '../../../assets/icons/flags/enFlag.png'
import EnFlagWebp from '../../../assets/icons/flags/enFlag.webp'
import RuFlagPng from '../../../assets/icons/flags/ruFlag.png'
import RuFlagWebp from '../../../assets/icons/flags/ruFlag.webp'
import { Select, SelectOptionType } from './Select'

/* options как пример без иконок */
const options: SelectOptionType[] = [
  { label: 'English', value: 'en' },
  { label: 'Russian', value: 'ru' },
]

/* options как пример + иконки */
const optionsWitIcons: SelectOptionType[] = [
  { icon: { png: EnFlagPng, webp: EnFlagWebp }, label: 'English', value: 'en' },
  { icon: { png: RuFlagPng, webp: RuFlagWebp }, label: 'Russian', value: 'ru' },
]

/* options как пример без иконок с одним заблокиравонным вариантом */
const optionsWithDisabledOption: SelectOptionType[] = [
  { label: 'English', value: 'en' },
  { disabled: true, label: 'Russian', value: 'ru' },
]

/* options как пример с большим количеством options */
const optionsWithExtraOptions: SelectOptionType[] = [
  { label: 'English', value: 'en' },
  { label: 'English', value: '1' },
  { label: 'English', value: '2' },
  { label: 'English', value: '3' },
  { label: 'English', value: '4' },
  { label: 'English', value: '5' },
  { label: 'English', value: '6' },
  { label: 'English', value: '7' },
  { label: 'English', value: '8' },
  { label: 'English', value: '9' },
  { label: 'English', value: '10' },
  { label: 'English', value: '11' },
  { label: 'English', value: '12' },
  { label: 'English', value: '13' },
  { label: 'English', value: '14' },
  { label: 'English', value: '15' },
]

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
}

export default meta

/* компонент-обертка, имитирует компонент, в котором будет применяться Select */
const Wrapper: FC<{
  isDisabled?: boolean
  label?: string
  options: SelectOptionType[]
  selectHeight?: string
}> = ({ isDisabled, label, options, selectHeight }) => {
  const [currentValue, setCurrentValue] = useState('en')

  return (
    <Select
      currentValue={currentValue}
      disabled={isDisabled}
      label={label}
      onValueChange={setCurrentValue}
      options={options}
      selectHeight={selectHeight}
      selectWidth={'200px'}
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

export const WithLabel = {
  render: () => <Wrapper label={'It is a label'} options={options} />,
}

export const WithExtraOptions = {
  render: () => <Wrapper options={optionsWithExtraOptions} />,
}

export const WithScrollBar = {
  render: () => <Wrapper options={optionsWithExtraOptions} selectHeight={'300px'} />,
}

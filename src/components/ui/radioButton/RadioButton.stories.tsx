import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'

import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
  argTypes: {
    groupName: { control: 'text' },
    id: { control: 'text' },
    isChecked: { control: 'boolean' },
    name: { control: 'text' },
    onChange: { action: 'changed' },
    value: { control: 'text' },
  },
  component: RadioButton,
  tags: ['autodocs'],
  title: 'Components/RadioButton',
}

export default meta
type Story = StoryObj<typeof RadioButton>

const RadioGroupWrapper: React.FC<{
  groupName: string
  options: { id: string; name: string; value: string }[]
}> = ({ groupName, options }) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0].value)

  const handleChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <div>
      {options.map(option => (
        <RadioButton
          groupName={groupName}
          id={option.id}
          isChecked={selectedValue === option.value}
          key={option.id}
          name={option.name}
          onChange={handleChange}
          value={option.value}
        />
      ))}
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <RadioGroupWrapper
      groupName={'exampleGroup'}
      options={[
        { id: 'radio1', name: 'Option 1', value: 'option1' },
        { id: 'radio2', name: 'Option 2', value: 'option2' },
        { id: 'radio3', name: 'Option 3', value: 'option3' },
      ]}
    />
  ),
}

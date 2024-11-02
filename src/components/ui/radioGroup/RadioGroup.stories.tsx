import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps, useState } from 'react'

import { RadioGroup } from './RadioGroup'

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

const meta: Meta<typeof RadioGroup> = {
  argTypes: {
    onValueChange: { action: 'value changed' },
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
}

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: ComponentProps<typeof RadioGroup>) => {
  const [selectedValue, setSelectedValue] = useState(args.value || options[0].value)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    if (args.onValueChange) {
      args.onValueChange(value)
    }
  }

  return <RadioGroup {...args} onValueChange={handleValueChange} value={selectedValue} />
}

export const DefaultRadioGroup: Story = {
  args: {
    disabled: false,
    options,
    value: options[0].value, // Initial selected value
  },
  render: Template,
}

export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    options,
    value: options[0].value,
  },
  render: (args: ComponentProps<typeof RadioGroup>) => <RadioGroup {...args} />,
}

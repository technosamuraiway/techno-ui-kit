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
  render: args => <Template {...args} />,
}

export const DifferentPaddingRadioGroup: Story = {
  args: {
    itemStyle: { padding: '1rem' },
    options,
    value: options[0].value,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates how to use the \`itemStyle\` prop to apply **inline styles** to each radio item wrapper.

- **Inline Styling:** Use the \`itemStyle\` prop to apply styles directly via inline styles.
- **CSS Modules:** If you prefer to use CSS Modules, you can use the \`itemClassName\` prop to apply custom styles via CSS classes.

Choose the method that best fits your project's styling strategy.
        `,
      },
    },
  },
  render: args => <Template {...args} />,
}

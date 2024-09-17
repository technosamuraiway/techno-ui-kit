import { Meta, StoryFn } from '@storybook/react'
import { fn } from '@storybook/test'

import { Tabs, TabsProps } from './Tabs'

//========================================================================================

// Define tabs data
const tabsData = [
  { title: 'Tab 1', value: 'tab1' },
  { title: 'Tab 2', value: 'tab2' },
  { disabled: true, title: 'Tab 3', value: 'tab3' },
]

// Template for stories
/** isWithContent пропс только для истории, чтобы отключить контент, при использовании компоненты, просто
 * не нужно добавлять children */
const Template: StoryFn<{ isWithContent: boolean } & TabsProps> = args => (
  <Tabs.Root {...args}>
    {args.isWithContent && (
      <>
        <Tabs.Content value={'tab1'}>Tab 1</Tabs.Content>
        <Tabs.Content value={'tab2'}>Tab 2</Tabs.Content>
        <Tabs.Content value={'tab3'}>Tab 2</Tabs.Content>
      </>
    )}
  </Tabs.Root>
)

export default {
  argTypes: {
    notFullWidth: {
      control: 'boolean',
      description: 'Not full width tabs',
    },
  },
  component: Template,
  tags: ['autodocs'],
  title: '🟢UI/Tabs',
} as Meta

// Default Tabs story
export const Default = Template.bind({})
Default.args = {
  defaultValue: tabsData[0].value,
  onValueChange: fn(),
  tabs: tabsData,
}

export const NotFullWidth = Template.bind({})
NotFullWidth.args = {
  defaultValue: tabsData[0].value,
  notFullWidth: true,
  onValueChange: fn(),
  tabs: tabsData,
}

// Controlled Tabs story
export const WithContent = Template.bind({})
WithContent.args = {
  defaultValue: tabsData[0].value,
  isWithContent: true,
  onValueChange: fn(),
  tabs: tabsData,
}

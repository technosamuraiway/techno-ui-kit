import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { TabType, Tabs } from './Tabs'

// Define tabsComponents data
const tabsData: TabType[] = [
  { title: 'Tab 1', value: 'tab1' },
  { title: 'Tab 2', value: 'tab2' },
  { disabled: true, title: 'Tab 3', value: 'tab3' },
]

const meta: Meta<typeof Tabs.Root> = {
  argTypes: {
    notFullWidth: {
      control: 'boolean',
      description: 'Not full width tabs',
    },
  },
  component: Tabs.Root,
  tags: ['autodocs'],
  title: 'Components/Tabs',
}

export default meta

type Story = StoryObj<typeof Tabs.Root>

// Template for stories
const Template: Story = {
  render: args => (
    <Tabs.Root {...args}>
      <Tabs.Content value={'tab1'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda deserunt dolore,
        doloribus, eius est hic iusto laboriosam molestiae optio similique vel voluptatum. Ab beatae
        deserunt distinctio doloremque ipsam molestias perferendis vero voluptates voluptatibus. Aut
        debitis dolore dolorum, eos error incidunt laboriosam nam necessitatibus, obcaecati officia
        quam quis sapiente sint?
      </Tabs.Content>
      <Tabs.Content value={'tab2'}>Content 2</Tabs.Content>
      <Tabs.Content value={'tab3'}>Disabled</Tabs.Content>
    </Tabs.Root>
  ),
}

// Default TabsComponents story
export const DefaultTabs: Story = {
  ...Template,
  args: {
    defaultValue: tabsData[0].value,
    onValueChange: fn(),
    tabs: tabsData,
  },
}

export const NotFullWidth: Story = {
  ...Template,
  args: {
    defaultValue: tabsData[0].value,
    notFullWidth: true,
    onValueChange: fn(),
    tabs: tabsData,
  },
}

// Controlled TabsComponents story
export const WithContent: Story = {
  ...Template,
  args: {
    defaultValue: tabsData[0].value,
    onValueChange: fn(),
    tabs: tabsData,
  },
}

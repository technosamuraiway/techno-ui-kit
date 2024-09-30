import { Meta, StoryFn } from '@storybook/react'
import { fn } from '@storybook/test'

import { TabType, Tabs, TabsProps } from './Tabs'

//========================================================================================

// Define tabsComponents data
const tabsData: TabType[] = [
  { title: 'Tab 1', value: 'tab1' },
  { title: 'Tab 2', value: 'tab2' },
  { disabled: true, title: 'Tab 3', value: 'tab3' },
]

// Template for stories
/** isWithContent пропс только для истории, чтобы отключить контент, при использовании компоненты, просто
 * не нужно добавлять children */
const Template: StoryFn<{ isWithContent: boolean } & TabsProps> = ({ isWithContent, ...args }) => (
  <Tabs.Root {...args}>
    {isWithContent && (
      <>
        <Tabs.Content value={'tab1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda deserunt
          dolore, doloribus, eius est hic iusto laboriosam molestiae optio similique vel voluptatum.
          Ab beatae deserunt distinctio doloremque ipsam molestias perferendis vero voluptates
          voluptatibus. Aut debitis dolore dolorum, eos error incidunt laboriosam nam
          necessitatibus, obcaecati officia quam quis sapiente sint?
        </Tabs.Content>
        <Tabs.Content value={'tab2'}>Content 2</Tabs.Content>
        <Tabs.Content value={'tab3'}>Disabled</Tabs.Content>
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
  title: 'Components/Tabs',
} as Meta

// Default TabsComponents story
export const DefaultTabs = Template.bind({})
DefaultTabs.args = {
  defaultValue: tabsData[0].value,
  isWithContent: false,
  onValueChange: fn(),
  tabs: tabsData,
}

export const NotFullWidth = Template.bind({})
NotFullWidth.args = {
  defaultValue: tabsData[0].value,
  isWithContent: false,
  notFullWidth: true,
  onValueChange: fn(),
  tabs: tabsData,
}

// Controlled TabsComponents story
export const WithContent = Template.bind({})
WithContent.args = {
  defaultValue: tabsData[0].value,
  isWithContent: true,
  onValueChange: fn(),
  tabs: tabsData,
}

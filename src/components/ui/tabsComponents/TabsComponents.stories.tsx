import { Meta, StoryFn } from '@storybook/react'
import { fn } from '@storybook/test'

import { TabType, TabsComponents, TabsProps } from './TabsComponents'

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
const Template: StoryFn<{ isWithContent: boolean } & TabsProps> = args => (
  <TabsComponents.Root {...args}>
    {args.isWithContent && (
      <>
        <TabsComponents.Content value={'tab1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda deserunt
          dolore, doloribus, eius est hic iusto laboriosam molestiae optio similique vel voluptatum.
          Ab beatae deserunt distinctio doloremque ipsam molestias perferendis vero voluptates
          voluptatibus. Aut debitis dolore dolorum, eos error incidunt laboriosam nam
          necessitatibus, obcaecati officia quam quis sapiente sint?
        </TabsComponents.Content>
        <TabsComponents.Content value={'tab2'}>Content 2</TabsComponents.Content>
        <TabsComponents.Content value={'tab3'}>Disabled</TabsComponents.Content>
      </>
    )}
  </TabsComponents.Root>
)

export default {
  argTypes: {
    notFullWidth: {
      control: 'boolean',
      description: 'Not full width tabsComponents',
    },
  },
  component: Template,
  tags: ['autodocs'],
  title: 'Components/TabsComponents',
} as Meta

// Default TabsComponents story
export const DarkTabs = Template.bind({})
DarkTabs.args = {
  color: 'dark',
  defaultValue: tabsData[0].value,
  onValueChange: fn(),
  tabs: tabsData,
}

export const BlueTabs = Template.bind({})
BlueTabs.args = {
  color: 'blue',
  defaultValue: tabsData[0].value,
  onValueChange: fn(),
  tabs: tabsData,
}

export const NotFullWidthDark = Template.bind({})
NotFullWidthDark.args = {
  color: 'dark',
  defaultValue: tabsData[0].value,
  notFullWidth: true,
  onValueChange: fn(),
  tabs: tabsData,
}

export const NotFullWidthBlue = Template.bind({})
NotFullWidthBlue.args = {
  color: 'blue',
  defaultValue: tabsData[0].value,
  notFullWidth: true,
  onValueChange: fn(),
  tabs: tabsData,
}

// Controlled TabsComponents story
export const DarkWithContent = Template.bind({})
DarkWithContent.args = {
  color: 'dark',
  defaultValue: tabsData[0].value,
  isWithContent: true,
  onValueChange: fn(),
  tabs: tabsData,
}

export const BlueWithContent = Template.bind({})
BlueWithContent.args = {
  color: 'blue',
  defaultValue: tabsData[0].value,
  isWithContent: true,
  onValueChange: fn(),
  tabs: tabsData,
}
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
        <Tabs.Content value={'tab1'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda deserunt
          dolore, doloribus, eius est hic iusto laboriosam molestiae optio similique vel voluptatum.
          Ab beatae deserunt distinctio doloremque ipsam molestias perferendis vero voluptates
          voluptatibus. Aut debitis dolore dolorum, eos error incidunt laboriosam nam
          necessitatibus, obcaecati officia quam quis sapiente sint?
        </Tabs.Content>
        <Tabs.Content value={'tab2'}>Content 2</Tabs.Content>
        <Tabs.Content value={'tab3'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias aliquam amet aperiam
          architecto asperiores commodi consectetur cupiditate distinctio dolores eaque earum
          excepturi facere hic id ipsa laborum magni, nisi nobis porro quasi qui quisquam quod quos
          reiciendis saepe sequi similique sint vel. A ab aliquam architecto beatae blanditiis
          consequatur consequuntur debitis dicta distinctio dolor dolore dolorem doloribus ea error
          hic illum impedit inventore iste itaque laboriosam, minima minus nisi nulla numquam
          obcaecati praesentium quis recusandae repellendus repudiandae, saepe sint, soluta sunt
          totam ullam vero voluptatem voluptatum. Ad assumenda blanditiis distinctio doloremque in
          officiis quas rerum sapiente sint unde.
        </Tabs.Content>
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

// Default Tabs story
export const DefaultDark = Template.bind({})
DefaultDark.args = {
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

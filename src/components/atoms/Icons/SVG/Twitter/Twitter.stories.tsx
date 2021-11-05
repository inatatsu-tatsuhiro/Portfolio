import { Story, Meta } from '@storybook/react'

import Logo, { Props } from './Component'

export default {
  title: 'Icons/Twitter',
  component: Logo,
} as Meta

const Template: Story<Props> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: () => console.log('click'),
}

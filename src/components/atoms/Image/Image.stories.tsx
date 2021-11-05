import { Story } from '@storybook/react'

import Component, { Props } from './Component'

export default {
  title: 'Atoms/Image',
  component: Component,
}
const Template: Story<Props> = (args: Props) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {}

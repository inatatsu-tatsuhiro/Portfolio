import { Story } from '@storybook/react'

import Component, { Props } from './Component'
import Twitter from '../Icons/SVG/Twitter/Component'

export default {
  title: 'Atoms/IconButton',
  component: Component,
}
const Template: Story<Props> = (args: Props) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Twitter />,
}

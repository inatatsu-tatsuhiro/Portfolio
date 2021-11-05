import { Story } from '@storybook/react'

import Component, { Props } from './Component'

export default {
  title: 'Atoms/Typography',
  component: Component,
}
const Template: Story<Props> = (args: Props) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  size: '10px',
  weight: 300,
  children: <h1>Hello</h1>,
}

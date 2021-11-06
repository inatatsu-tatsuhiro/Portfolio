import { Story } from '@storybook/react'

import Component, { Props } from './Component'
import Nem from '../Icons/SVG/Nem/Component'

export default {
  title: 'Atoms/IconButton',
  component: Component,
}
const Template: Story<Props> = (args: Props) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Nem />,
}

import { Story } from '@storybook/react'
import styled from 'styled-components'

import Component, { Props } from './Component'

export default {
  title: 'Atoms/Card',
  component: Component,
}
const Div = styled('div')`
  height: 300px;
`
const Template: Story<Props> = (args: Props) => <Component {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Div />,
}

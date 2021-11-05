import { Story } from '@storybook/react'

import styled from 'styled-components'

import Component, { Props } from './Component'

export default {
  title: 'Atoms/Centering',
  component: Component,
}
const Mock = styled('div')`
  width: 100px;
  height: 100px;
  margin: 5px;
  background: pink;
`

const Children = () => {
  return (
    <>
      <Mock />
      <Mock />
      <Mock />
      <Mock />
      <Mock />
      <Mock />
      <Mock />
      <Mock />
      <Mock />
    </>
  )
}

const Template: Story<Props> = (args) => (
  <Root>
    <Component {...args} />
  </Root>
)
export const Default = Template.bind({})
Default.args = {
  children: <Children />,
}
export const Column = Template.bind({})
Column.args = {
  direction: 'column',
  children: <Children />,
}
export const HolizontalStart = Template.bind({})
HolizontalStart.args = {
  holizontal: 'start',
  children: <Children />,
}
export const HolizontalEnd = Template.bind({})
HolizontalEnd.args = {
  holizontal: 'end',
  children: <Children />,
}
export const VerticalStart = Template.bind({})
VerticalStart.args = {
  vertical: 'start',
  children: <Children />,
}
export const VerticalEnd = Template.bind({})
VerticalEnd.args = {
  vertical: 'flex-end',
  children: <Children />,
}

const Root = styled('div')`
  width: 100vw;
  height: 100vh;
`

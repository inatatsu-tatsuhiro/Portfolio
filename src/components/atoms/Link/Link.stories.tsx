import { Story, Meta } from '@storybook/react'

import Link, { Props } from './Component'

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta

const Template: Story<Props> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://www.google.com/',
  text: 'test',
}

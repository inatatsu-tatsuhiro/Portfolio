import * as React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Card from '../../atoms/Card/Component'
import Link from '../../atoms/Link/Component'

export interface Props {}

const Component: React.FC<Props> = () => {
  const location = useLocation()
  const pn = location.pathname
  console.log('pn', pn)
  return (
    <Root>
      <Card width="calc(100% - 64px)">
        <Wrapper>
          <Link href="/" text="Profile" isHere={pn === '/'} />
          <Link href="/products" text="Products" isHere={pn === '/products'} />
          <Link href="/skills" text="Skills" isHere={pn === '/skills'} />
          <Link href="/activity" text="Activity" isHere={pn === '/activity'} />
        </Wrapper>
      </Card>
    </Root>
  )
}

export default Component

const Wrapper = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  & > * {
    margin: 4px 8px;
  }
`

const Root = styled('div')`
  width: 100%;
`

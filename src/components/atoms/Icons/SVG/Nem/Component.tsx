import * as React from 'react'
import styled from 'styled-components'

import { ReactComponent as SVG } from './image.svg'

export interface Props {
  onClick?: () => void
}

const Logo: React.VFC<Props> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <SVG />
    </Wrapper>
  )
}

export default Logo

const Wrapper = styled('div')`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  & > * {
    color: red !important;
  }
`

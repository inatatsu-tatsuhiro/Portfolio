import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import Color from '../../../utils/Color'

export interface Props {
  href: string
  text: string
  isHere: boolean
}

const Component: React.VFC<Props> = ({ href, text, isHere }) => {
  const navi = useNavigate()
  return (
    <A onClick={() => navi(href)} isHere={isHere}>
      {text}
    </A>
  )
}

export default Component

const A = styled('div')<{
  isHere: boolean
}>`
  font-size: 24px;
  color: ${props => props.isHere ? Color.pink : Color.white};
`

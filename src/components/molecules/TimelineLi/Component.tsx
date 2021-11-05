import React from 'react'
import styled from 'styled-components'

import Color from '../../../utils/Color'

export interface Props {
  date: string
  title: string
  discription: string
  setOpen: (num: number) => void
  num: number
  k: number
}

const Component: React.FC<Props> = ({date, title, discription, setOpen, num, k}) => {
  const isSelect = num === k
  return (
    <Root onClick={() => setOpen(k)}>
      <Dot color={isSelect ? Color.pink : Color.default} />
      <Date>{date}</Date>
      <Title>{title}</Title>
      {isSelect && <Disctiption>&nbsp;&nbsp;{discription}</Disctiption>}
    </Root>
  )
}

export default Component


const Root = styled('li')`
  margin: 40px 0;
  position: relative;
  color: ${Color.white}
`

const Date = styled('span')`
  position: absolute;
  margin-top: -10px;
  top: 50%;
  left: -160px;
  line-height: 20px;
`

const Disctiption = styled('div')`
  margin-top: 16px;
`
const Title = styled('div')`
  font-size: 24px;
`
const Dot = styled('span')<{
  color: string
}>`
  margin-top: -10px;
  top: 50%;
  left: -54px;
  width: 10px;
  height: 10px;
  background: ${props => props.color};
  border: 5px solid ${Color.white};
  border-radius: 50%;
  display: block;
  position: absolute;
`
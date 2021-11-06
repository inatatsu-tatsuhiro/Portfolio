import React from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'

import Color, { addAlpha } from '../../../utils/Color'

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
  const width = useWindowSize().width
  const l = width < 1400
  return (
    <Root onClick={() => setOpen(k)}>
      <Dot color={isSelect ? Color.pink : Color.default} />
      {l || <Date>{date}</Date>}
      <Title>{title}</Title>
      {isSelect && <Disctiption>&nbsp;&nbsp;{discription}</Disctiption>}
      {isSelect && l && <DateMini>{date}</DateMini>}
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
const DateMini = styled('div')`
  margin-top: 8px;
  color: ${addAlpha(Color.white, 0.6)};
  text-align: right;
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
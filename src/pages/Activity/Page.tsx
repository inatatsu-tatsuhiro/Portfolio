import React, { useState } from 'react'
import styled from 'styled-components'

import TimelineLi from '../../components/molecules/TimelineLi/Component'

import Color from '../../utils/Color'
import {data} from './data'


const Page: React.VFC = () => {
  const [number, setNumber] = useState(-1)
  const json = data.json
  return (
    <div>
      <Root>
        <TimeLineUl>
          {json.map((j, k) => {
            return (
              <TimelineLi
                title={j.title}
                date={j.date}
                discription={j.disctiption}
                num={number}
                k={k}
                setOpen={setNumber}
              />
            )
          })}
        </TimeLineUl>
      </Root>
    </div>
  )
}

export default Page

const Root = styled('div')`
  width: 100%;

  & > * {
    margin: 16px 8px;
  }
`

const TimeLineUl = styled('ul')`
  list-style: none;
  margin: 50px 0 30px 120px;
  padding-ledt: 30px;
  border-left: 8px solid ${Color.white};
`

const TimeLineLi = styled('li')`
  margin: 40px 0;
  position: relative;
`
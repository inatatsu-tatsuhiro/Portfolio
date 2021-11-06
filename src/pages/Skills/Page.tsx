import React from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'

import {data} from './data'

import SkillCard from '../../components/molecules/SkillCard/Component'

const Page: React.VFC = () => {

  const json = data.json
  const width = useWindowSize().width
  const l = width < 1400
  return (
      <div>
        <Root>
          {json.map((j) => {
            return (
              <SkillCard
                name={j.name}
                logo={j.logo}
                since={j.since}
                discription={j.discription}
              />
            )
          })}
          {l || [...Array(8)].map((_, k) => {
            return <Dummy key={k} />
          })}
        </Root>
      </div>
  )
}

export default Page


const Root = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  & > * {
    margin: 16px 8px;
  }
`


const Dummy = styled('span')`
  display: block;
  width: calc(40% + 62px);
  heitht: auto;
`

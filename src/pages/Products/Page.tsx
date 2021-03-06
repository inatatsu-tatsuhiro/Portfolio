import React from 'react'
import styled from 'styled-components'
import ProductCard from '../../components/molecules/ProductCard/Component'
import { useWindowSize } from 'react-use'

import {data} from './data'

const Page: React.VFC = () => {

  const json = data.json
  const width = useWindowSize().width
  const l = width < 1400
  return (
    <div>
      <Root>
        {json.map((j) => {
          return <ProductCard name={j.name} discription={j.discription} link={j.link} linkType={j.linkType}/>
        })}
        {l || [...Array(4)].map((_, k) => {
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
  width: calc(25% + 62px);
  heitht: auto;
`

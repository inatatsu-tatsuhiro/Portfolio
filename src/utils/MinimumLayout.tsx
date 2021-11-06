import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Card from '../components/atoms/Card/Component'
import SideCard from '../components/molecules/SideCard/Minimum'
import NameCard from '../components/molecules/NameCard/Minumum'


interface Props {
  page: React.ReactNode
  title: string
}

const Layout: React.VFC<Props> = ({ page, title }) => {
  return (
    <>
      <Helmet>
        <title>InatatsuPortfolio | {title}</title>
      </Helmet>
      <Wrapper className="wrapper">
        <MainArea className="sidearea">
          <SideCard />
          <Card width="calc(80vw - 64px)">{page}</Card>
        <NameCard />
        </MainArea>
      </Wrapper>
    </>
  )
}

export default Layout


const MainArea = styled('div')`
  width: 80vw;
  display: flex;
  flex-flow: column;
  justify-content: center;

  & > * {
    margin: 16px 0px;
  }
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`
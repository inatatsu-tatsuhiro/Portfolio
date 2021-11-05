import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SideCard from '../components/molecules/SideCard/Component'
import NameCard from '../components/molecules/NameCard/Component'
import Typography from '../components/atoms/Typography/Component'
import Color, { addAlpha } from '../utils/Color'

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
      <Wrapper>
        <SideArea>
          <Div>
            <SideCard />
            <Title>
              <Typography
                size="96px"
                weight={500}
                color={addAlpha(Color.white, 0.4)}>
                {title}
              </Typography>
            </Title>
            <NameCard />
          </Div>
        </SideArea>
        <MainArea>{page}</MainArea>
      </Wrapper>
    </>
  )
}

export default Layout

// 全体 - Header - margin - Footer
const MainArea = styled('div')`
  width: 70vw;
  min-height: calc(100vh - 80px);
  margin-right: 40px;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 30px;
  padding: 30px;
`
const Title = styled('div')`
  text-align: right;
  margin-top: 24px;
  text-shadow: 2px 4px 6px ${addAlpha(Color.white, 0.2)};
`

const SideArea = styled('div')`
  width: 30vw;
  min-height: calc(100vh - 80px);

  & > div {
    min-height: calc(100vh - 80px);
    position: fixed;
  }
`

const Wrapper = styled('div')`
  display: flex;
  margin: 40px 0px;

`

const Div = styled('div')`
  width: calc(30vw - 40px);
`
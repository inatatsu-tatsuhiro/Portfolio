import * as React from 'react'
import styled from 'styled-components'
import Card from '../../atoms/Card/Component'
import Typography from '../../atoms/Typography/Component'
import Image from '../../atoms/Image/Component'

import Color, { addAlpha } from '../../../utils/Color'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { SiQiita } from 'react-icons/si'

export interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <Root>
      <Card width="calc(80vw - 64px)">
        <Wrapper>
          <Profile>
            <Container>
              <Name>
                <Typography size="32px" weight={300}>
                  いなたつ
                </Typography>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/icon.png`}
                  width="64px"
                />
              </Name>
              <Typography size="16px" weight={300}>
                ブロックチェーンやVR、Web等の開発を気ままにやっている大学生。電算研元会長
              </Typography>
              <FlexWrapper>
                <IconWrapper
                  onClick={() =>
                    window.open('https://twitter.com/_inatatsu_csg_')
                  }>
                  <FiTwitter />
                </IconWrapper>
                <IconWrapper
                  onClick={() =>
                    window.open('https://github.com/inatatsu-tatsuhiro')
                  }>
                  <FiGithub />
                </IconWrapper>
                <IconWrapper
                  onClick={() => window.open('https://qiita.com/inatatsu_csg')}>
                  <SiQiita />
                </IconWrapper>
              </FlexWrapper>
            </Container>
          </Profile>
        </Wrapper>
      </Card>
    </Root>
  )
}

export default Component


const Root = styled('div')`
  display: flex;
  flex-direction: column;

  min-width: 320px;
  width: 24vw;
`
const Wrapper = styled('div')`
  display: flex;
  width: 100%; ;
`
const Name = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 8px;
`
const Profile = styled('div')`
  display: flex;
  justify-content: space-around;
`

const FlexWrapper = styled('div')`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-around;

  & > * {
    margin: 4px 0px;
    color: white;
    width: 32px;
    height: 32px;
  }
`

const Container = styled('div')`
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled('div')`
  width: 32px;
  height: 32px;
  color: ${Color.white};

  & > svg {
    width: 32px;
    height: 32px;
  }
`

import * as React from 'react'
import styled from 'styled-components'
import Card from '../../atoms/Card/Component'
import Typography from '../../atoms/Typography/Component'
import Image from '../../atoms/Image/Component'

import Color from '../../../utils/Color'
import { FiTwitter, FiGithub } from 'react-icons/fi'
import { SiQiita } from 'react-icons/si'

export interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <Root>
      <Card width="20vw">
        <Wrapper>
          <ImageWrapper>
            <SImage
              src={`${process.env.PUBLIC_URL}/images/icon.png`}
              width="8vw"
            />
          </ImageWrapper>
          <Profile>
            <Container>
              <Name>
                <Typography size="32px" weight={300}>
                  いなたつ
                </Typography>
              </Name>
              <Typography size="16px" weight={300}>
                ブロックチェーンやVR、Web等の開発を気ままにやっている大学院生。電算研元会長
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

const SImage = styled(Image)`
  clip-path: ellipse(35% 50% at 50% 50%);
`

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 100%;

  min-width: 320px;
  width: 24vw;
  margin: 0px 20px;
`
const Wrapper = styled('div')`
  display: flex;
  width: 100%; ;
`
const Name = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 4px 8px;
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

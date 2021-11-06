import * as React from 'react'
import { useWindowSize } from 'react-use'
import styled from 'styled-components'
import { FiLink } from 'react-icons/fi'
import Color, { addAlpha } from 'utils/Color'
import Typography from 'components/atoms/Typography/Component'
import Card from '../../atoms/Card/Component'

export interface Props {
  name: string
  discription: string
  link ?: string
  linkType ?: string
}

const Component: React.FC<Props> = ({name, discription, link, linkType}) => {
  const width = useWindowSize().width
  const l = width < 1400
  return (
    <Card width={l ? '80%' : '25%'}>
      <Flex>
        <Wrapper>
          <Name size="24px" weight={300}>
            {name}
          </Name>
          <Description
            size="16px"
            weight={300}
            color={addAlpha(Color.white, 0.6)}>
            {discription}
          </Description>
        </Wrapper>
        {link && (
          <Tooltip>
            <LinkIcon onClick={() => window.open(link)}>
              <FiLink></FiLink>
            </LinkIcon>
            <div className="tooltip-text">{linkType}</div>
          </Tooltip>
        )}
      </Flex>
    </Card>
  )
}

export default Component

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
`
const Name = styled(Typography)`
  margin: 4px;
`
const Description = styled(Typography)`
  margin: 4px;
`

const LinkIcon = styled('div')`
  width: 24px;
  height: 24px;
  color: ${Color.white};

  & > svg {
    width: 24px;
    height: 24px;
  }
`
const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`

const Tooltip = styled('span')`
position: relative;
  cursor: pointer;
  &:hover .tooltip-text {
    opacity: 1;
    visibility: visible;
  }
}
.tooltip-text {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -35px;
  display: inline-block;
  padding: 5px;
  white-space: nowrap;
  font-size: 10.5px;
  line-height: 1.3;
  background: ${Color.white};
  color: ${Color.default};
  border-radius: 3px;
  transition: 0.3s ease-in;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  &:before {
    content: '';
    position: absolute;
    top: -13px;
    left: 50%;
    margin-left: -7px;
    border: 7px solid transparent;
    border-bottom: 7px solid ${Color.white};;
  }
`
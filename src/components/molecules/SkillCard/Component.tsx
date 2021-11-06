import * as React from 'react'
import styled from 'styled-components'
import { useWindowSize } from 'react-use'

import Typography from 'components/atoms/Typography/Component'
import Color, { addAlpha } from 'utils/Color'
import Card from '../../atoms/Card/Component'

export interface Props {
  name: string
  logo: React.ReactNode
  since: string
  discription: string
}

const Component: React.FC<Props> = ({ name, logo, since, discription }) => {
    const width = useWindowSize().width
    const l = width < 1400
  return (
    <Card width={l ? "80%" : "40%"}>
      <Flex>
        <IconWrapper>{logo}</IconWrapper>
        <Text size="24px" weight={300}>
          {name}
        </Text>
      </Flex>
      <Disctiption>
        <Text size="16px" weight={300} color={addAlpha(Color.white, 0.6)}>
          {discription}
        </Text>
      </Disctiption> 
      <Since>
        <Text size="12px" weight={300} color={addAlpha(Color.white, 0.4)}>
          {since}~
        </Text>
      </Since>
    </Card>
  )
}

export default Component

const Text = styled(Typography)`
  margin: 4px;
`
const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
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

const Since = styled('div')`
  margin-top: 16px;
  text-align: right;
`
const Disctiption = styled('div')`
  margin-top: 16px;
`
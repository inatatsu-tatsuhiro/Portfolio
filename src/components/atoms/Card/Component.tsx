import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  children: React.ReactNode
  width: string
}

const Component: React.FC<Props> = ({
  children,
  width
}) => {
  return (
    <Style width={width}>
      {children}
    </Style>
  )
}

export default Component

const Style = styled('div')<{
  width: string
}>`
  border-radius: 30px;
  background: #1f1f1f;
  border: solid white 2px;
  width: ${props => props.width};

  padding: 30px;
`

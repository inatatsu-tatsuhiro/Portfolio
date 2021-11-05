import React from 'react'
import styled from 'styled-components'

export interface Props {
  children: React.ReactNode
  color?: string
}

const Component: React.VFC<Props> = ({
  color = '#ffcaba',
  children,
}) => {
  return <SButton {...{ color }}>{children}</SButton>
}

export default Component

const SButton = styled('button')<{
  color: string
}>`
  background: ${(props) => props.color};
  border: 1px solid;
  border-radius: 100000px;
  padding: 0 !important;
`

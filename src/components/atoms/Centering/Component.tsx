import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  children: React.ReactNode
  direction?: string
  nowrap?: boolean
  vertical?: string
  holizontal?: string
  width?: string
  height?: string
  items?: string
}

const Component: React.FC<Props> = ({
  direction = 'row',
  nowrap = false,
  vertical = 'center',
  holizontal = 'center',
  width = '100%',
  height = '100%',
  items = 'normal',
  children,
}) => {
  return (
    <Style
      direction={direction}
      holizontal={holizontal}
      vertical={vertical}
      width={width}
      height={height}
      items={items}
      wrap={nowrap ? 'nowrap' : 'wrap'}>
      {children}
    </Style>
  )
}

export default Component

const Style = styled('div')<{
  direction: string
  wrap: string
  vertical: string
  holizontal: string
  width: string
  height: string
  items: string
}>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction};
  ${(props) => props.wrap && 'flex-wrap: wrap'};
  justify-content: ${(props) => props.holizontal};
  align-content: ${(props) => props.vertical};
  align-items: ${(props) => props.items};
`

import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  src?: string
  width?: string
  height?: string
  fit?: string
}

const Component: React.VFC<Props> = ({
  src = `404`,
  width,
  height,
  fit = 'cover',
  ...rest
}) => {
  return (
    <Style
      src={src === '404' ? `${process.env.PUBLIC_URL}/noimage.png` : src}
      width={width || height || '100px'}
      height={height || width || '100px'}
      fit={fit}
      {...rest}
    />
  )
}

export default Component

const Style = styled('img')<{
  width: string
  height: string
  fit: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.fit};
`

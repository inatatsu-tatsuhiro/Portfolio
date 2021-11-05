import * as React from 'react'
import styled from 'styled-components'
import Color from '../../../utils/Color'

export type TypographyAlign = 'left' | 'center' | 'right'
export type TypographyFont = 'default' | 'tanugo' | 'roboto'
export interface Props {
  size: string
  weight: number
  align?: TypographyAlign
  font?: TypographyFont
  color?: string
  isBlock?: boolean
  children?: React.ReactNode
}

const Typography: React.VFC<Props> = ({
  size,
  weight,
  align = 'left',
  font = 'default',
  color = Color.white,
  isBlock = false,
  children,
  ...rest
}) => {
  const fontfamily = ((font) => {
    if (font === 'tanugo') return 'tanugo'
    return 'Noto Sans JP'
  })(font)

  return (
    <Style
      {...rest}
      color={color}
      align={align}
      size={size}
      fontFamily={fontfamily}
      fontWeight={weight}
      isBlock={isBlock}>
      {children}
    </Style>
  )
}

const Style = styled('span')<{
  color: string
  align: string
  size: string
  fontFamily: string
  fontWeight: number
  isBlock: boolean
}>`
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.size};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => props.isBlock && 'display: block'};
`

export default Typography

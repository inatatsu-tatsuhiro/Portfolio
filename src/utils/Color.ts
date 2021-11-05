const Pallet = {
  default: 'rgb(31, 31, 31)',
  white: 'rgb(240, 240, 240)',
  pink: 'rgb(180, 41, 249)'
}

export const addAlpha = (color: string, alpha: number) => {
  return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`)
}
export default Pallet

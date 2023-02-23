import { SVGProps } from 'react'
import { StyledLoaderContainer } from './StyledLoaderContainer'

const Loader = (props: SVGProps<SVGSVGElement>) => (
  <StyledLoaderContainer>
    <svg width={200} height={200} viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' display='block' {...props}>
      <circle cx={50} cy={50} fill='none' stroke='none' strokeWidth={10} r={35} strokeDasharray='164.93361431346415 56.97787143782138'>
        <animateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1' />
      </circle>
    </svg>
  </StyledLoaderContainer>
)

export default Loader

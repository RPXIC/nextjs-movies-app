import * as React from 'react'
import { SVGProps } from 'react'

const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={41} height={40} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path stroke='#751B5C' strokeWidth={3} d='M41 21.5H0M20.5 0v40' />
  </svg>
)

export default Plus

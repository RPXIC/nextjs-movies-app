import * as React from 'react'
import { SVGProps } from 'react'

const BackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={48} height={48} {...props}>
    <path d='M0 0h48v48H0z' fill='none' />
    <path d='M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z' />
  </svg>
)

export default BackArrow

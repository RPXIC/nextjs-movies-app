import * as React from 'react'
import { SVGProps } from 'react'
import Star from 'public/empty-star.svg'
import Image from 'next/image'

const EmptyStar = (props: SVGProps<SVGSVGElement>) => <Image src={Star} height={21} width={21} alt='empty_star' />

export default EmptyStar

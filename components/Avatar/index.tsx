import Image from 'next/image'
import { StyledAvatar } from './StyledAvatar'
import AvatarImg from '../../public/avatar.svg'

export default function Avatar() {
  return (
    <StyledAvatar>
      <Image alt='avatar' src={AvatarImg} />
    </StyledAvatar>
  )
}

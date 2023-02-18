import Avatar from '../Avatar'
import SignOutButton from '../SignOutButton'
import { StyledUserMenu } from './StyledUserMenu'

export default function UserMenu() {
  return (
    <StyledUserMenu>
      <li>
        <div>
          <Avatar />
        </div>
        <ul>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </li>
    </StyledUserMenu>
  )
}

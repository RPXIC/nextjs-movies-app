import { StlyedInput } from './StyledInput'
import { Props } from './types'

export default function Input({ type, value, onChange, placeholder }: Props) {
  return <StlyedInput type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
}

import { StlyedInput } from './StyledInput'

export default function Input({ type, value, onChange, placeholder }: any) {
  return <StlyedInput type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
}

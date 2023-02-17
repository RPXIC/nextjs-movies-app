import Button from '../Button'

export default function LoginForm({ children }: any) {
  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '343px',
        height: '394px',
        backgroundColor: '#000000',
        borderRadius: '16px',
        padding: '8px'
      }}>
      {children}
    </form>
  )
}

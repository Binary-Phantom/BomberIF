import { Container, Off, On } from './style'

interface ToggleProps {
  children : string
  on       : boolean
  onClick  : () => void
}

//Botão de toggle usado no menu de opções

export default function Toggle ({children, on, onClick}:ToggleProps) {
  return (
    <Container onClick={onClick}>
      <label>{children}</label>
      {on ? <On>ON</On> : <Off>OFF</Off>}
    </Container>
  )
}
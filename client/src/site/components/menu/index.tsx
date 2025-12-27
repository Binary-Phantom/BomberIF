import { useNavigate } from 'react-router-dom'
import { PAGES } from '~/constants'
import { Container } from './style'

export default function Menu () {

  const navigate = useNavigate()

  return (
    <Container>
      <button onClick={() => navigate(PAGES.HOME)}>Menu</button>
      <button onClick={() => navigate(PAGES.ABOUT)}>Sobre</button>
      <button onClick={() => navigate(PAGES.HELP)}>Ajuda</button>

    </Container>
  )

}
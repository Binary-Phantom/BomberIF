import useIsPortrait from '~/hooks/useIsPortrait'
import { Computer, Gamepad, Smartphone } from './assets'
import { AuthorContainer, Container, Footer, GameContainer } from './style'

interface SectionProps {
  isPortrait : boolean
}

function AuthorSection ({isPortrait}:SectionProps) {
  return (
    <AuthorContainer isPortrait={isPortrait}>
      <div>
        <h1>Autor</h1>
        <br></br>
        <h1> Vinícius Nogueira Proença</h1>
        <img src='https://avatars.githubusercontent.com/u/123850856?v=4' />
      </div>
      <div>
        {/*<h1>Vinícius Nogueira Proença</h1>
        <p>Focused on Being Annoying</p>
        */}
        <h1>Instituto Federal do Norte de Minas Gerais – Campus Januária</h1>
        <br></br>
        <h2>Bacharelado em Sistemas de Informação</h2>
        <br></br>
        <h2>Trabalho de Conclusão de Curso</h2>
        <br></br>
        <h2>Jogo: BomberIF</h2>
        <br></br>
        <h3>Orientadora: Profª Drª Joselice F. Lima</h3>
        <br></br>
        <h3>Co-orientador: Esp. Herbert W. Macêdo</h3>
        <br></br>
        <h3>Aluno: Vinicius Nogueira Proença</h3>
        <br></br>
        <div>
          <div>
            <button onClick={() => window.open('https://github.com/Binary-Phantom', '_blank')}>GitHub</button>
            <button onClick={() => window.open('https://www.linkedin.com/in/viniproenca777/', '_blank')}>LinkedIn</button>
          </div>
          
        </div>
      </div>
    </AuthorContainer>
  )
}

function GameSection () {
  return (
    <GameContainer>
      <h1>BomberIF</h1>
      <p>BomberIF é um jogo multiplayer online do tipo battle royale baseado em navegador sucessor do clássico BomberTADS. Com gráficos 2D clássicos e uma trilha sonora incrível, 4 jogadores competem pela vitória usando bombas esperando assim superar o inevitável Jubilamento. O jogo conta atualmente com 10 personagens baseados em alunos e professores do Campus Januária, power-ups e suporte para controle, teclado e mobile. Você agora pode jogar com seus amigos e também se conectar com qualquer pessoa no mundo todo, graças ao sistema de lobby, apelidos, chamadas e tela cheia. Convide seus amigos para disputas épicas e use power-ups para aprimorar suas habilidades. Quem escapará?</p>
      <div>
        <Gamepad />
        <Computer />
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/screenshots/0.png`} />
    </GameContainer>
  )
}

export default function AboutPage () {

  const isPortrait = useIsPortrait()

  return (
    <Container>
      <AuthorSection isPortrait={isPortrait} />
      <GameSection />
      <Footer>
        <a href='https://github.com/Binary-Phantom' target='_blank' title='Powered by Vinícius Proença'>&lt;KEK/&gt;</a>
      </Footer>
    </Container>
  )

}
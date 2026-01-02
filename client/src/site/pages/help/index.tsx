import useIsPortrait from '~/hooks/useIsPortrait'
import { Container, HelpSection, Section, Footer, Highlight, Highlight2, Highlight3, Highlight4, PowerUpsTitle } from './style'

export default function HelpPage () {
  const isPortrait = useIsPortrait()

  return (
    <Container>
      <HelpSection isPortrait={isPortrait}>
        <div>
          <h1><Highlight4>Resumo 🎮</Highlight4></h1>  

          <p>
            BomberIF é um jogo multiplayer online onde até 4 jogadores competem
            na arena usando bombas para jubilar adversários.
          </p>

          <img src={`${process.env.PUBLIC_URL}/images/help/11.png`} />

          <p><strong>Personagens jogáveis disponíveis até o momento</strong></p>

          <img src={`${process.env.PUBLIC_URL}/images/help/20.png`} />
          <strong>Ícones das bombas disponíveis</strong>
        </div>

        <div>
          <h1><Highlight4>Controles ⌨️</Highlight4></h1>

          <p><strong>Teclado:</strong> WASD ou Setas + Espaço.</p>
          <p><strong>Mobile:</strong> Controles na tela.</p>

          <img src={`${process.env.PUBLIC_URL}/images/help/8.png`} />

          <p>
            <strong>
              Dica: O power-up Troca de dados requer que o jogador interaja
              com a barra de espaço enquanto se locomove para arremessar a bomba.
            </strong>
          </p>

          <h1><Highlight4>Interface 🔧</Highlight4></h1>

          <p><strong><Highlight3>Lobby</Highlight3></strong></p>

          <img src={`${process.env.PUBLIC_URL}/images/help/21.png`} />

          <p>
            <strong>
              <Highlight>Dica:</Highlight> Use a opção “Preencher Sala” caso queira aguardar outros jogadores. <Highlight>Desabilite-a</Highlight> caso queira jogar sozinho ou não queira aguardar mais ninguém.
            </strong>
          </p> 
          

          <img src={`${process.env.PUBLIC_URL}/images/help/22.png`} />

          <p><strong>Opções de ajustes gerais para o jogador: </strong></p>

          <p>
            <strong>
              <Highlight>Sala/Lobby ID:</Highlight>{' '}
              Insira o código da sala que deseja entrar.
            </strong>
          </p>

          <p>
            <strong>
              <Highlight>Novo Nick:</Highlight>{' '}
              Altere seu nome de usuário conforme desejar.
            </strong>
          </p>

          <p>
            <strong>
              <Highlight>Habilitar Voz (ALPHA):</Highlight>{' '}
              Converse com outros jogadores em tempo real.
            </strong>
            <strong>
              <Highlight2> No momento funciona apenas caso os jogadores estejam na mesma rede.</Highlight2>{' '}
            </strong>
          </p>

          <p>
            <strong>
              <Highlight>Tela Cheia: </Highlight>{' '}
              Habilita o modo FullScreen.
            </strong>
          </p>

          <p>
            <strong>
              <Highlight>Modo mobile: </Highlight>{' '}
              Habilita controles virtuais para dispositivos móveis.
            </strong>
          </p>
        </div>

        <Section>
          <div>
            <PowerUpsTitle>Power-ups ⚡</PowerUpsTitle>
            <p>
              Existem diversos power-ups espalhados pelo mapa que podem ser
              coletados ao explodir blocos. Eles incluem:
            </p>
          </div>


          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/0.png`} />
              <div>
                <strong>Função Linear: </strong>
                <p></p>
                <span>Aumenta o alcance das explosões das bombas.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/1.png`} />
              <div>
                <strong>Troca de dados: </strong>
                <p></p>
                <span>Permite alterar a direção do lançamento da bomba.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/2.png`} />
              <div>
                <strong>Chute: </strong>
                <p></p>
                <span>Permite chutar as bombas colocadas.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/3.png`} />
              <div>
                <strong>Sinal Bom: </strong>
                <p></p>
                <span>Aumenta a velocidade de movimento em 10%.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/4.png`} />
              <div>
                <strong>Sinal Ruim: </strong>
                <p></p>
                <span>Diminui a velocidade de movimento em 10%.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/5.png`} />
              <div>
                <strong>Firewall: </strong>
                <p></p>
                <span>Permite atravessar paredes temporariamente.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/6.png`} />
              <div>
                <strong>Grafo: </strong>
                <p></p>
                <span>Inverte a direção dos comandos.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/7.png`} />
              <div>
                <strong>IHM: </strong>
                <p></p>
                <span>Elimina o jogador instantaneamente ao contato.</span>
              </div>
            </li>
          </ul>
        </Section>
      </HelpSection>

      <Footer>
        <span>Boa sorte… você vai precisar 💣</span>
      </Footer>
    </Container>
  )
}
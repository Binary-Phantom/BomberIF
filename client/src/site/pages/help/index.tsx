import useIsPortrait from '~/hooks/useIsPortrait'
import { Container, HelpSection, Section, Footer } from './style'

export default function HelpPage () {
  const isPortrait = useIsPortrait()

  return (
    <Container>
      <HelpSection isPortrait={isPortrait}>
        <div>
          <h1>Resumo 🎮</h1>
          <p>
            BomberIF é um jogo multiplayer online onde até 4 jogadores competem
            na arena usando bombas para jubilar adversários.
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

        <img src={`${process.env.PUBLIC_URL}/images/help/11.png`} />
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <p><strong> Personagens jogáveis disponíveis até o momento </strong></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <img src={`${process.env.PUBLIC_URL}/images/help/20.png`} />
        <p><strong> ícones das bombas disponíveis  </strong></p>
        </div>

        <div>
          <h1>Controles ⌨️</h1>
          <p><strong>Teclado: </strong> WASD ou Setas + Espaço</p>
          <p><strong>Mobile: </strong> Controles na tela</p>
          <img src={`${process.env.PUBLIC_URL}/images/help/8.png`} />
          <p><strong> Dica: O powerup Troca de dados Requer que o jogador interaja com a barra de espaço enquanto se locomove </strong> </p>
        </div>


        <Section>
            <div>
                <h1>Power-ups ⚡</h1>
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
                <span>Aumenta o alcance das explosões das suas bombas automaticamente.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/1.png`} />
              <div>
                <strong>Troca de dados: </strong>
                <span>Permite ao jogador a possibilidade de alterar a direção do lançamento da bomba.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/2.png`} />
              <div>
                <strong>Chute: </strong>
                <span>Permite ao jogador chutar as bombas colocadas.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/3.png`} />
              <div>
                <strong>Sinal Bom: </strong>
                <span>Aumenta sua velocidade de movimento em 10% (acumulativo).</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/4.png`} />
              <div>
                <strong>Sinal Ruim: </strong>
                <span>Diminui sua velocidade de movimento em 10% (acumulativo).</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/5.png`} />
              <div>
                <strong>Firewall: </strong>
                <span>Permite que você atravesse temporariamente paredes e blocos.</span>
              </div>
            </li>

            <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/6.png`} />
              <div>
                <strong>Grafo: </strong>
                <span>Inverte a direção dos comandos.</span>
              </div>

            </li>
               <li>
              <img src={`${process.env.PUBLIC_URL}/images/help/7.png`} />
              <div>
                <strong>IHM: </strong>
                <span>Elimina o jogador instantaneamente ao ter contato.</span>
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

import { useDispatch, useSelector } from 'react-redux'
import { LobbyDTO } from '#/dto'
import { useEffect } from 'react'
import { copyToClipboard } from '~/services/clipboard'
import OnlinePlayers from '~/site/components/onlinePlayers'
import Toggle from '~/site/components/toggle'
import { setFillRoom } from '~/store/options/actions'
import { OptionsDTO } from '~/store/options/reducer'
import { playLobbySound, stopLobbySound } from '~/game/sound/lobby'
import { joinRoom } from './method'
import { Container, LobbyContainer, LobbyId, Options, OptionsContainer, Play, PlayContainer, PlayBorder, Player, PlayersContainer } from './style'
//let winPlaying = false

interface LobbyProps {
  lobby          : LobbyDTO
  setShowOptions : React.Dispatch<React.SetStateAction<boolean>>
}

function handlePlayClick () {
  stopLobbySound()
  joinRoom()
}
export default function Lobby ({ lobby, setShowOptions } : LobbyProps) {

  const dispatch = useDispatch()
  const options = useSelector<any,OptionsDTO>(state => state.options)

  useEffect(() => {
    // Ativa qnd sair da partida ou reload da página
    playLobbySound()

    return () => {
      // qnd ta na partida
      stopLobbySound()
    }
  }, [])

  return (
    <Container>
      <PlayContainer>
        <PlayBorder onClick={handlePlayClick}><Play>Jogar!</Play></PlayBorder>
        <Toggle on={options.fillRoom} onClick={() => dispatch(setFillRoom())}>Preencher Sala</Toggle>
        <OnlinePlayers/>
      </PlayContainer>
      <LobbyContainer>
        <OptionsContainer>
          <LobbyId onClick={() => copyToClipboard(lobby.lobbyId)}>{lobby.lobbyId}</LobbyId>
          <Options onClick={() => setShowOptions(true)}>Opções</Options>
        </OptionsContainer>
        <PlayersContainer>
          {lobby.players.map((p,i) => (
            <Player key={`${i}${p.nick}`}>{p.nick}</Player>
          ))}
        </PlayersContainer>
      </LobbyContainer>
    </Container>
  )

}
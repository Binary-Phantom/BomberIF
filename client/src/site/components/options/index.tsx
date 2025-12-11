import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ID_LENGTH, NICK } from '#/constants'
import { dispatchOfferCall } from '~/services/events'
import { emitChangeLobby } from '~/services/socket'
import Toggle from '~/site/components/toggle'
import { setCall, setFullScreen, setTouchControls } from '~/store/options/actions'
import { OptionsDTO } from '~/store/options/reducer'
import { setUserNick } from '~/store/user/actions'
import { CloseOptions, Container, FormContainer } from './style'

interface OptionsProps {
  setShowOptions : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Options ({ setShowOptions } : OptionsProps) {

  const lobbyIdRef = useRef<HTMLInputElement>(null)
  const nickRef = useRef<HTMLInputElement>(null)
  const options = useSelector<any,OptionsDTO>(state => state.options)
  const dispatch = useDispatch()

         {/*verifica se o lobby/sala que o jogador busca existe*/}
  function handleChangeLobby (event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { value } = lobbyIdRef.current!
    if (!value || value.length !== ID_LENGTH) return
    setShowOptions(false)
    emitChangeLobby(value)
    dispatchOfferCall()
  }
         {/*verifica se o nick do jogador é válido*/}
  function handleChangeNick (event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { value } = nickRef.current!
    if (!value || value.length < NICK.MIN || value.length > NICK.MAX) return
    setShowOptions(false)
    dispatch(setUserNick(value))
  }
         {/*Botões, caixas e afins do menu de opções*/}
  return (
    <Container>
      <CloseOptions onClick={() => setShowOptions(false)}>Voltar</CloseOptions>
      <FormContainer>
        <form onSubmit={handleChangeLobby}>
          <input ref={lobbyIdRef} type='text' placeholder='Sala/lobby id' maxLength={ID_LENGTH} minLength={ID_LENGTH} />
          <input type='submit' value='Entrar!' />
        </form>
        <form onSubmit={handleChangeNick}>
          <input ref={nickRef} type='text' placeholder='Novo nick' maxLength={NICK.MAX} minLength={NICK.MIN} />
          <input type='submit' value='Mudar' />
        </form>
        <Toggle on={options.call} onClick={() => dispatch(setCall())}>
          Habilitar voz
        </Toggle>
        <Toggle on={options.fullScreen} onClick={() => dispatch(setFullScreen())}>
          Tela Cheia
        </Toggle>
        <Toggle on={options.touchControls} onClick={() => dispatch(setTouchControls())}>
          Modo Mobile
        </Toggle>
      </FormContainer>
    </Container>
  )

}
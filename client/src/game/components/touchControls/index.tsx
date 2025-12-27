import { useRef } from 'react'
import { SIDES } from '#/dto'
import { Action } from './assets'
import { DPad } from './dpad'

import {
  ActionContainer,
  Container,
  ControlsContainer,
  MoveContainer
} from './style'

interface TouchControlsProps {
  isPortrait: boolean
}

/* =========================
   MAPA DE TECLAS
========================= */
const KEYDOWN_EVENTS = {
  A: new KeyboardEvent('keydown', { key: ' ' }),
  U: new KeyboardEvent('keydown', { key: 'W' }),
  D: new KeyboardEvent('keydown', { key: 'S' }),
  L: new KeyboardEvent('keydown', { key: 'A' }),
  R: new KeyboardEvent('keydown', { key: 'D' })
}

const KEYUP_EVENTS = {
  U: new KeyboardEvent('keyup', { key: 'W' }),
  D: new KeyboardEvent('keyup', { key: 'S' }),
  L: new KeyboardEvent('keyup', { key: 'A' }),
  R: new KeyboardEvent('keyup', { key: 'D' })
}

export default function TouchControls({ isPortrait }: TouchControlsProps) {
  const touch = useRef<{ side: SIDES }>({
    side: 'D'
  })

  return (
    <Container>
      {/* =========================
          CONTROLE DE MOVIMENTO
      ========================= */}
      <MoveContainer isPortrait={isPortrait}>
        <ControlsContainer>
          <DPad
            onMoveStart={(dir) => {
              if (!dir) return

              // solta direção anterior
              document.dispatchEvent(KEYUP_EVENTS[touch.current.side])

              const map = {
                up: 'U',
                down: 'D',
                left: 'L',
                right: 'R'
              } as const

              const side = map[dir]

              document.dispatchEvent(KEYDOWN_EVENTS[side])
              touch.current.side = side
            }}
            onMoveEnd={() => {
              document.dispatchEvent(KEYUP_EVENTS[touch.current.side])
            }}
          />
        </ControlsContainer>
      </MoveContainer>

      {/* =========================
          BOTÃOZINHO DO CAPETA HIHIHIHI
      ========================= */}
      <ActionContainer isPortrait={isPortrait}>
        <Action
          onTouchStart={() => {
            document.dispatchEvent(KEYDOWN_EVENTS.A)
          }}
        />
      </ActionContainer>
    </Container>
  )
}

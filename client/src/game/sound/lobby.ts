import { isWinPlaying } from './win'

const SOUND = new Audio(`${process.env.PUBLIC_URL}/sound/lobby/0.mp3`)
SOUND.loop = true

export function playLobbySound () {
  if (isWinPlaying()) return // bloqueia o audio do lobby durante vitória

  SOUND.currentTime = 0
  SOUND.play().catch(() => {})
}

export function stopLobbySound () {
  SOUND.pause()
  SOUND.currentTime = 0
}

// pausa musica quando troca de aba
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    SOUND.pause()
  }
})


/* if socket == event_id {

	var buff = async_load["buffer"]
	buffer_seek(buff, buffer_seek_start, 0)
	var cmd = buffer_read(buff, buffer_u8)
	
	switch (cmd){
	
	
	
	}
} antiga criação de array para carregamento de audio/sfx */
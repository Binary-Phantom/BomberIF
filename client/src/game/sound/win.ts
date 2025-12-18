let winPlaying = false

const SOUND = new Audio(`${process.env.PUBLIC_URL}/sound/win/0.mp3`)

export function isWinPlaying () {
  return winPlaying
}

export function playWinSound (callback: () => void) {
  winPlaying = true

  const onEnd = () => {
    stopWinSound()
    winPlaying = false
    callback()
  }

  SOUND.currentTime = 0
  SOUND.onended = onEnd
  SOUND.onerror = onEnd
  SOUND.play().catch(() => {})
}

export function stopWinSound () {
  SOUND.onended = null
  SOUND.onerror = null
  SOUND.pause()
  SOUND.currentTime = 0
}

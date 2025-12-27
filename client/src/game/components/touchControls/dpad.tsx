import React from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | null

interface DPadProps {
  onMoveStart: (dir: Direction) => void
  onMoveEnd: () => void
}

export function DPad({ onMoveStart, onMoveEnd }: DPadProps) {
  let active: Direction = null

  function getDir(e: React.TouchEvent<SVGSVGElement>): Direction {
    const r = e.currentTarget.getBoundingClientRect()
    const t = e.touches[0]

    const x = t.clientX - r.left - r.width / 2
    const y = t.clientY - r.top - r.height / 2

    if (Math.abs(x) > Math.abs(y)) {
      return x > 0 ? 'right' : 'left'
    }
    return y > 0 ? 'down' : 'up'
  }

  function start(e: React.TouchEvent<SVGSVGElement>) {
    active = getDir(e)
    onMoveStart(active)
  }

  function move(e: React.TouchEvent<SVGSVGElement>) {
    const d = getDir(e)
    if (d !== active) {
      active = d
      onMoveStart(d)
    }
  }

  function end() {
    active = null
    onMoveEnd()
  }

  return (
    <svg
      viewBox="0 0 180 180"
      width="100%"
      height="100%"
      onTouchStart={start}
      onTouchMove={move}
      onTouchEnd={end}
    >
      {/* 🔵 CÍRCULO ÚNICO DE FUNDO */}
      <circle
        cx="90"
        cy="90"
        r="88"
        fill="currentColor"
        opacity="0.25"
      />

      {/* ➕ CRUZ ÚNICA */}
      <path
        fill="currentColor"
        d="
          M70 10
          H110
          V70
          H170
          V110
          H110
          V170
          H70
          V110
          H10
          V70
          H70
          Z
        "
      />
    </svg>
  )
}

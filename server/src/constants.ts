const ORIGINS: Record<string, boolean> = {
  'http://localhost:3000': true,
  'https://localhost:3000': true,
  'http://192.168.1.5:3000': true,
  'https://192.168.1.5:3000': true,
  'https://binary-phantom.github.io': true
}

export const CORS = {
  methods: ['GET'],
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Socket.IO às vezes manda origin undefined (SSR, healthcheck)
    if (!origin) return callback(null, true)

    callback(null, !!ORIGINS[origin])
  }
}

export const MAX_PLAYERS = 4
export const PORT = process.env.PORT || 4000


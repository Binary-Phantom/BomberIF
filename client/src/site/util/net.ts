export function isInternetSlow (): boolean {
  const nav = navigator as any
  const connection = nav?.connection || nav?.mozConnection || nav?.webkitConnection

  if (!connection) {
    return false
  }

  const effectiveType = String(connection.effectiveType || '').toLowerCase()
  const saveData = Boolean(connection.saveData)

  if (saveData) {
    return true
  }

  return effectiveType === 'slow-2g' || effectiveType === '2g'
}

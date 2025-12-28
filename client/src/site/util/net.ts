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





//antiga chamada de api. FUNCIONAVA APENAS NO CHROME E EDGE

/*interface NetworkInformation extends EventTarget {
  downlink      : number
  effectiveType : string
  rtt           : number
  saveData      : boolean
}

export function isInternetSlow () {
  // @ts-expect-error
  const info = navigator.connection as NetworkInformation
  if (!info || info.saveData || info.rtt > 1000 || info.downlink < 2) {
    return true
  }
  return false
}*/
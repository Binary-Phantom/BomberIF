import { toast } from 'react-toastify'

export function copyToClipboard (text:string) {
  toast.info(`Cod. copiado: ${text}`, {autoClose:2000, theme:'dark'})
  return navigator.clipboard.writeText(text)
}
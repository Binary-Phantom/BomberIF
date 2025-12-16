import { toast, ToastOptions } from 'react-toastify'
import { ERRORS } from '#/errors'
import { BASENAME } from '~/constants'

const toastOptions:ToastOptions = {
  autoClose: 3000,
  theme: 'colored'
}

const darkOptions:ToastOptions = {
  ...toastOptions,
  theme: 'dark'
}

const notCloseOptions:ToastOptions = {
  ...toastOptions,
  autoClose: false
}

const handler:{[key:string]:Function|undefined} = {
  [ERRORS.ALREADY_IN_LOBBY]: () => {
    toast.warn('Você já está na sala', darkOptions)
  },
  [ERRORS.ALREADY_PAIRING]: () => {
    toast.warn('A sala está em pareamento', darkOptions)
  },
  [ERRORS.CREATE_LOBBY_FAILED]: () => {
    toast.error('Falha ao criar lobby', notCloseOptions)
  },
  [ERRORS.CREATE_ROOM_FAILED]: () => {
    toast.error('Falha ao criar a sala', notCloseOptions)
  },
  [ERRORS.LOBBY_FULL]: () => {
    toast.info('O lobby ou a sala estão cheios', darkOptions)
    redirectToHomePage()
  },
  [ERRORS.LOBBY_NOT_FOUND]: () => {
    toast.error('Lobby não encontrado', toastOptions)
    redirectToHomePage()
  },
  [ERRORS.PAGE_LOADING]: () => {
    toast.error('Jubilando', toastOptions)
  },
  [ERRORS.SET_USER_FAILED]: () => {
    toast.error('Erro ao atualizar usuário', toastOptions)
  }
}

function redirectToHomePage () {
  setTimeout(() => {
    window.location.href = BASENAME
  }, toastOptions.autoClose as number)
}

export function errorHandler (error:number) {
  const fn = handler[error]
  if (fn) fn()
  else    console.error(error)
}
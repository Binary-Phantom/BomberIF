export const ONDEV = process.env.NODE_ENV === 'production'

export const BASENAME = '/BomberIF'

export const PAGES = {
  HOME: '/',
  ABOUT: '/about'
}


export const SERVER_URL = ONDEV ? 'https://192.168.1.5:4000': 'https://bomberif.onrender.com'
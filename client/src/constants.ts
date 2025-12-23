export const ONDEV = process.env.NODE_ENV === 'production'

export const BASENAME = '/BomberIF'

export const PAGES = {
  HOME: '/',
  ABOUT: '/about'
}


export const SERVER_URL = ONDEV ? 'https://bomberif.onrender.com': 'https://bomberif.onrender.com'

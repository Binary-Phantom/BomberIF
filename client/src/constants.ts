export const ONDEV = process.env.NODE_ENV === 'development'

export const BASENAME = '/BomberIF'

export const PAGES = {
  HOME: '/',
  ABOUT: '/about',
}

//export const SERVER_URL = ONDEV
 // ? 'http://192.168.2.81:4000'
//: 'http://192.168.2.81:4000'
 
export const SERVER_URL = ONDEV ? 'https://192.168.1.5:4000': 'https://bomberif.onrender.com'
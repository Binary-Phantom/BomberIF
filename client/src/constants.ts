export const ONDEV = process.env.NODE_ENV === 'development'

export const BASENAME = '/bomberif'

export const PAGES = {
  HOME: '/',
  ABOUT: '/about',
}

export const SERVER_URL = ONDEV
  ? 'http://192.168.2.81:4000'
  : 'http://192.168.2.81:4000'
 
//export const SERVER_URL = ONDEV ? 'http://192.168.2.81:4000' /*: 'https://bomberif-server.onrender.com'*/:'http://localhost:4000'
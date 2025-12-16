import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { BASENAME, PAGES } from '~/constants'
import AboutPage from '~/site/pages/about'
import HomePage from '~/site/pages/home'
import NotFoundPage from '~/site/pages/notFound'

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path={PAGES.HOME} element={<HomePage/>} errorElement={<NotFoundPage/>}>
    
      <Route path={PAGES.ABOUT} element={<AboutPage/>} />
    </Route>
  ),
  {
    basename: BASENAME
  }
)
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useWindowSize } from 'react-use'

import Top from '../pages/Top/Page'
import Products from '../pages/Products/Page'
import Skills from '../pages/Skills/Page'
import Activity from '../pages/Activity/Page'

import NormalLayout, { Props as LayoutProps} from './Layout'
import MinimumLayout from './MinimumLayout'

const Router: React.VFC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout title="Profile" page={<Top />} />} />
        <Route
          path="/products"
          element={<Layout title="Products" page={<Products />} />}
        />
        <Route
          path="/skills"
          element={<Layout title="Sklills" page={<Skills />} />}
        />
        <Route
          path="/activity"
          element={<Layout title="Activity" page={<Activity />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

const MINIMUM = 'MINMUM'
const NORMAL = 'NORMAL'

const Layout: React.VFC<LayoutProps> = ({title, page}) => {
  const width = useWindowSize().width
  const l =  width < 1400
  return l ? <MinimumLayout {...{title, page}} /> : <NormalLayout {...{title, page}} />
}


/****************************************************************

width 1400
height 700

****************************************************************/

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from '../pages/Top/Page'
import Products from '../pages/Products/Page'
import Skills from '../pages/Skills/Page'
import Activity from '../pages/Activity/Page'
import Layout from './Layout'

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

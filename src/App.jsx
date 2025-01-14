import Layout from './components/Layout/Layout'
import { lazy } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CamperPage = lazy(() => import ('./pages/CamperPage/CamperPage'))
const Features = lazy(() => import ('./components/Features/Features'))
const Reviews = lazy(() => import ('./components/Reviews/Reviews'))
const NotFoundPage = lazy(() => import ('./pages/NotFoundPage/NotFoundPage'))



function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<CamperPage />}>
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App

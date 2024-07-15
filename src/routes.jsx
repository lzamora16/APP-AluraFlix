import Inicio from 'pages/Inicio';
import NuevoVideo from 'pages/NuevoVideo';
import PaginaBase from 'pages/PaginaBase';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaBase />}>
                <Route index element={<Inicio />} />
                <Route path='nuevo' element={<NuevoVideo />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
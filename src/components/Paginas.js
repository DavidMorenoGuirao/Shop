import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './Inicio/index'
import { ProductList } from './Products/index'
import { ProductDetail } from './Products/ProductDetail'

export const Paginas = () => {
  return (
    <section>
        <Routes>
            <Route path='/' exact element={<Inicio/>} />
            <Route path='/products' exact element={<ProductList/>} />       
            <Route path='/products/:id' exact element={<ProductDetail/>} />  
        </Routes>
    </section>
    
  )
}

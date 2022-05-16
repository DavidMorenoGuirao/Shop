import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { ProductoItem } from './ProductoItem'

export const ProductList = () => {
  
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <>
      <h1 className='title'> PRODUCTS </h1>

      <div className='products'>
        {productos.map(producto => (
            <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}         
            img1={producto.img1}
            img2={producto.img2}
            cantidad={producto.cantidad}          
            />
        ))}                                
      </div>
    
    </>
    
  )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    img1,
    img2,
    cantidad

}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div>
        <div className='product'>
        <Link to={`/products/${id}`}>
        <div className='product__img'>
            <img src={image} alt={title}/>
        </div>
        </Link>
        <div className='product__footer'>
          <h2>{title}</h2>
          <p>{category}</p>
          <p className='price'>{price} €</p>
        </div>
        <div className='button'>
          <button className='btn' onClick={() => addCarrito(id)}>
            Añadir a la cesta
          </button>
          <div>
          <Link to={`/products/${id}`} className='btn'>+ Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

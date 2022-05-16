import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { ProductoItem } from './ProductoItem';


export const ProductDetail = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([]);
    const [url, setUrl] = useState(0);
    const [images, setImages] = useState('');
    const params = useParams();
    let item = 0;

    useEffect(() => {        
        productos.forEach(producto =>{
            item = 0;
            if (producto.id === parseInt(params.id)) {
                setDetalle(producto);
                setUrl(0);
            }            
        });
    }, [params.id, productos]);

    // console.log(detalle);

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`
        setImages(values);       
    } , [url, params.id]);

    const handleInput = e => {
        const number = e.target.value.toString().padStart(2, '01');
        setUrl(number);
        // console.log(number);       
    }

    
  return (
    <>
        {
            <div className='detalles'>
                <h2>{detalle.title}</h2>
                <p className='price'>${detalle.price}</p>  
                <div className='grid'>
                    <p className='nuevo'>Nuevo</p>
                    <div className='size'>
                        <select placeholder='Tamaño'>
                            <option value='1'>S</option>
                            <option value='2'>M</option>
                            <option value='3'>L</option>
                            <option value='4'>XL</option>
                        </select>
                        <p>Tamaño</p>

                    </div>
                </div>             
                <button onClick={()=>addCarrito(detalle.id)}>Añadir al carrito</button>
                {
                   url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
                }
                

                <input className="range" id='range' type='range' min='1' max='36' value={url} onChange={handleInput}></input>
                <div className='description'>
                    <p><b>Description: </b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae itaque culpa fugiat optio.Doloremque quam excepturi nobis dolore dicta, deleniti voluptas assumenda optio voluptatibus est ipsum! Hic laboriosam doloremque soluta aperiam expedita?
                    <br/> <br/>Doloremque quam excepturi nobis dolore dicta, deleniti voluptas assumenda optio voluptatibus est ipsum! Hic laboriosam doloremque soluta aperiam expedita?</p>
                </div>
                <br/><br/><br/><br/>
            </div>
        }
        
        <h2 className='relacionados'>Productos relacionados</h2>
        
        <div className='products'>
            {productos.map((producto) => {
                if((item < 6) && (detalle.category === producto.category)){
                    item++;
                    return <ProductoItem
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
                }                
            })
            }                                            
        </div>
        
    </>
  )
}

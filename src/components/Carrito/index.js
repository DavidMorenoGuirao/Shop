import React, { useContext } from 'react'
import Card from '../../assets/images/img07.jpg'
import { DataContext } from '../../context/DataProvider'



export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito,setCarrito] = value.carrito;
    const [total] = value.total;

    const toogleFalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id => {
        carrito.forEach(item => {
            if(item.id === id){
                item.cantidad === 1 ? setCarrito(carrito.filter(item => item.id !== id)) : item.cantidad--;
            }
            setCarrito([...carrito]);
        })
    }

    const suma = id => {
        carrito.forEach(item => {
            if(item.id === id){
                item.cantidad++;
            }
            setCarrito([...carrito]);
        })
    }

    const removeProduct = id => {
        if(window.confirm('¿Estas seguro de eliminar este producto?')){
            carrito.forEach((item, index) => {
                if(item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index, 1);
                }
                
            })
            setCarrito([...carrito]);
        }
        
    }


  return (
    <div className={show1}>

        <div className={show2}>            
            <div className='carrito__close' onClick={toogleFalse}>
                <box-icon name='x'></box-icon>
            </div>
            <h2>Su carrito</h2>
            <div className='carrito__center'>

                {
                    carrito.length === 0 ? <h2 style={{
                        textAlign: 'center', fontSize: '3rem',
                    }}> Carrito Vacio</h2> : <>

                    {carrito.map((producto) => (

                        <div className='carrito__item' key={producto.id}>
                            <img src={producto.image} alt=''/>
                            <div>
                                <h3>
                                    {producto.title}
                                </h3>
                                <p className='price'>{producto.price} €</p>
                            </div>
                            <div>
                                <box-icon name='up-arrow' type='solid' onClick={() => suma(producto.id)}></box-icon>
                                <p className='cantidad'>{producto.cantidad}</p>
                                <box-icon name='down-arrow' type='solid' onClick={() => resta(producto.id)}></box-icon>
                            </div>
                            <div className='remove__item' onClick={() => removeProduct(producto.id)}>
                                <box-icon name='trash'></box-icon>
                            </div>
                        </div>
                ))}
                </>}
               

            </div>
            <div className='carrito__footer'>
                <h3>{total} €</h3>
                <button className='btn'>Comprar</button>
            </div>
        </div>
        
    </div>
  )
}

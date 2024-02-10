import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ItemDetail from './ItemDetail.jsx';





const ItemDetailContainer = () => {
    const { _id } = useParams();
    const productId = _id;
    const { token } = useAuth();
    const [product, setProduct] = useState(null);


    //1) FETCH GET (dentro de un useEffect): Obtener el producto para ver en ItemDetail
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                if (!productId) {
                    return;
                }

                const response = await fetch(`https://back-end-n8q1.onrender.com/api/products/${productId}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error al cargar los datos del producto (${response.status})`);
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error al recuperar datos del producto', error);
            }
        };

        fetchProductDetails();
    }, [productId]);


    //2) FETCH POST: Agregar producto al carrito
    const handleAddToCart = async (quantity) => {
        try {
            if (!token || !token.cart) {
                console.error('Token o cart no definidos');
                return;
            }

            const cartId = token.cart;
            console.log('_id:', _id); // Modificación aquí
            console.log('cartId:', cartId);
            console.log('quantity:', quantity);

            // Realizar el fetch para agregar el producto al carrito
            try {
                const response = await fetch(`https://back-end-n8q1.onrender.com/api/carts/${cartId}/product/${productId}`, { // Modificación aquí
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Incluir las credenciales de autenticación
                    credentials: 'include',
                    body: JSON.stringify({
                        quantity: quantity
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al agregar producto al carrito');
                }

                const data = await response.json();
                console.log('Producto agregado al carrito', data);
            } catch (error) {
                console.error('Error al agregar producto al carrito:', error.message);
                // Maneja el error de acuerdo a tus necesidades, por ejemplo, mostrando un mensaje al usuario
            }
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error.message);
            // Maneja el error de acuerdo a tus necesidades, por ejemplo, mostrando un mensaje al usuario
        }
    };



    //3) HTML
    return (
        <>
            <Header />
            {product ? (
                <ItemDetail product={product} onAddToCart={handleAddToCart} />
            ) : (
                <p>Cargando datos del producto...</p>
            )}
            <Footer />
        </>
    );
};


export default ItemDetailContainer;
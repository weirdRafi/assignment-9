import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import SingleCart from '../SingleCart/SingleCart';

const Applied = () => {
    const [cart, setCart] = useState([])
    const pData = useLoaderData()
    useEffect(() => {
        const savedCart = getStoredCart()
        // console.log(savedCart);
        let newArr = []
        for (const id in savedCart) {
            const foundProduct = pData.find(p => p.id == id)
            if (foundProduct) {
                foundProduct.quantity = savedCart[id]
                newArr.push(foundProduct)
            }
        }
        setCart(newArr)
    }, [])
    // const { id, img, title, location, salary, subtitle } = cart[0]
    console.log(cart);
    return (
        <div>
            <div >
                {
                    cart.map(scart => <SingleCart scart={scart}></SingleCart>)
                }

            </div>
        </div>
    );
};

export default Applied;
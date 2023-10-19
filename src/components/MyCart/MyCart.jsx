import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycartcard from '../Mycartcard/Mycartcard';

const MyCart = () => {
    const cartDatas = useLoaderData()
    console.log(cartDatas);
    return (
        <div>
            <h1 className='text-5xl font-extrabold my-11 text-center'>my cart list</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {

                    cartDatas.map(cartData => <Mycartcard key={cartData._id} data={cartData} ></Mycartcard>)
                }

            </div>
        </div>
    );
};

export default MyCart;
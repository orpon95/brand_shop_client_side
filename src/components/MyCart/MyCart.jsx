import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycartcard from '../Mycartcard/Mycartcard';

const MyCart = () => {
    const cartDatas = useLoaderData()
    const [loadedUsers, setLoadedUsers] = useState(cartDatas)
    console.log(loadedUsers);
    return (
        <div>
            <h1 className='text-5xl font-extrabold my-11 text-center'>my cart list</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    loadedUsers.length == 0 ?

                        // card
                        // <h1 className='text-5xl text-red-700 text-center font-bold my-7'>sry No cart list</h1> 
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body justify-center ">
                                <h2 className="card-title text-red-500">sry No cart list</h2>
                                
                                
                            </div>
                        </div>


                        :

                        loadedUsers.map(loadedUser => <Mycartcard key={loadedUser._id} cartdata={loadedUser} setLoadedUsers={setLoadedUsers} loadedUsers={loadedUsers} ></Mycartcard>)
                }

            </div>
        </div>
    );
};

export default MyCart;
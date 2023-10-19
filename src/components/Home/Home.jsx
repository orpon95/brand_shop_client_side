/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Logocard from '../Logocard/Logocard';

const Home = () => {

    const datas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-2 md:grid-cols-3 my-9 gap-7 items-center'>
                {

                    datas.map(data => <Logocard key={data.name} data={data} ></Logocard>)
                }
            </div>


        </div>
    );
};

export default Home;
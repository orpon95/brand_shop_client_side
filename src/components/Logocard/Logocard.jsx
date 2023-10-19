/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Logocard = ({ data }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out'
        })

    }, [])
    const { name, image_url } = data
    return (
        <div >
            <div className='space-y-4  '>
                <div>
                    <img data-aos="fade-up-right" className='w-32 h-28 rounded-lg text-center' src={image_url} alt="" />
                </div>
                <h1 data-aos="fade-up-right" className='text-lg font-bold '>{name}</h1>
            </div>

        </div>
    );
};

export default Logocard;
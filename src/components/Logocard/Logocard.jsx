/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';

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
            <NavLink to={`/ProductCard/${name}`}>
                <div className='space-y-4  '>
                    <div>
                        <img data-aos="fade-up-right" className='w-32 h-28 rounded-lg text-center' src={image_url} alt="" />
                    </div>
                    <h1 data-aos="fade-up-right" className='text-lg font-bold '>{name}</h1>
                </div>
            </NavLink>

        </div>
    );
};

export default Logocard;
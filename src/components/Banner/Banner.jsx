import React, { useEffect } from 'react';
import "./Banner.css"
import AOS from 'aos';
import "aos/dist/aos.css";


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out'
        })

    }, [])
    return (
        <div>
            <div className="card lg:card-side  shadow-xl items-center my-7">
                <figure data-aos="fade-up-right"><img className='w-[80%] '  src="https://i.ibb.co/zVZMRJM/istockphoto-1467920800-170667a.webp" alt="Album" /></figure>
                <div  data-aos="fade-left" className="card-body items-center justify-center">
                    <h2 className="card-title font-extrabold text-xl md:text-3xl">welcome to our <span className='color-changing-text'>tech-city</span> </h2>
                    <p className=' text-lg md:text-2xl font-bold'>The world is in our hand </p>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;
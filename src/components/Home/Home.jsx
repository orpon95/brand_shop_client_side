/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Logocard from '../Logocard/Logocard';
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {

    const datas = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold text-center border-b-2 border-pink-400'>Brands</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 my-9 gap-7 items-center'>
                {

                    datas.map(data => <Logocard key={data.name} data={data} ></Logocard>)
                }
            </div>
            {/* abput us section */}
            <h1 className='text-center block text-3xl font-extrabold my-8 border-b-2 border-pink-400 '>About us </h1>

            <div className='flex  justify-center gap-9 my-14 '>

                {/* about us */}



                <div  data-aos="fade-up-right" className="card  shadow-xl border-2 border-r-cyan-400">
                    <div className="card-body">

                        <p className='text-center text-xl italic'>your one-stop destination for cutting-edge technology and stylish gadgets. At Brand Shop, we take pride in offering a curated selection of the latest smartphones, sleek laptops, and state-of-the-art computer accessories that cater to the tech-savvy and fashion-forward individual. Our shop is a haven for those who demand not only functionality but also style, with a range of products from the world's most renowned brands.</p>

                    </div>
                </div>
                {/* who we are */}

                <div  data-aos="fade-up-left" className="card  shadow-xl border-2 border-r-cyan-400">
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto">Who we are</h2>
                        <p className='text-center'>we are more than just a retail store; we are a team of dedicated technology enthusiasts and trendsetters on a mission to redefine the way you experience the world of gadgets and electronics.?</p>

                    </div>
                </div>
            </div>

            {/* cpnatct section */}
            <h2 className='text-3xl  text-center border-b-4 border-pink-400'>contact details</h2>

            <div className='flex flex-wrap justify-between my-4 ' >

                <div data-aos="fade-up-right" className='shadow-xl p-5 rounded-lg'><h1 className='text-xl font-bold'>phone:</h1>
                    <h3>+0218878455</h3>
                    <h3>+6465874456</h3>

                </div>
                <div data-aos="fade-up-right" className='shadow-xl p-5 rounded-lg'><h1 className='text-xl font-bold'>address</h1>
                    <h2>sayedabad,1280/c <br />
                        Dhaka
                    </h2>

                </div>
                <div data-aos="fade-up-right" className='shadow-xl p-5 rounded-lg'><h2 className='text-xl font-bold'>
                    email:

                </h2>
                    <h3 className='underline text-red-400'>support@gmail.com</h3>
                    <h3 className='underline text-red-400'>techcity@gmailcom</h3>

                </div>
            </div>


        </div>
    );
};

export default Home;
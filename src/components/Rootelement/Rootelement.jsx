import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Rootelement = () => {
    const divStyle = {
        backgroundImage: 'url("https://i.ibb.co/XCKDZsk/blurry-gradient-haikei.png")',
        backgroundSize: 'cover', // You can set other background properties as well
    };
    return (
        <div style={divStyle} className='font-poppins w-full md:w-[80%] mx-auto p-5 md:p-8 lg:p-14' >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Rootelement;
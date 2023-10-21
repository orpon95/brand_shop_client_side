import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./Rootelement.css"

const Rootelement = () => {

    const [toggleData, setToggleData] = useState('')
    console.log(toggleData);

    const toggleFunc = (tData) => {
        setToggleData(tData)
    }



    
    
    return (
        <div className={toggleData ? "dark-theme" : "light-theme"}>
            <div  className='font-poppins w-full md:w-[80%] mx-auto p-5 md:p-8 lg:p-14' >
                <NavBar tData={toggleFunc} ></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default Rootelement;
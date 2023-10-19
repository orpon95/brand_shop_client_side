/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLinkStyle = {
    color : 'red',
}

const NavBar = () => {
    return (
        <div className='flex justify-between gap-4 items-center flex-col lg:flex-row bg-rose-200 rounded-lg'>
            <div className="navbar bg-rose-200 rounded-lg  flex-1   justify-center lg:justify-start ">
                <img className='w-[50px] h-[50px] rounded-full' src="https://i.ibb.co/9pn7svT/4k-tech-0agxdfta55vf3gym.jpg" alt="" />
                <a className="btn btn-ghost italic  normal-case text-xl font-poppins">Tech-city</a>
            </div>

            <div className='   space-x-1 md:space-x-4  flex-1 my-5 lg:my-0'>
                <NavLink to={"/"} activeStyle = {activeLinkStyle}  > <button className='btn bg-rose-400' >HOME</button> </NavLink>
                <NavLink to={"/addProduct"}> <button className='btn bg-rose-400' >Add Product</button> </NavLink>
                <NavLink to={"/myCart"}> <button className='btn bg-rose-400'>my cart</button> </NavLink>
                <NavLink to={"/login"}> <button className='btn bg-rose-400'>Log in</button> </NavLink>



            </div>

        </div>
    );
};

export default NavBar;
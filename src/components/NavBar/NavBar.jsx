/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const activeLinkStyle = {
    color: 'red',
}

const NavBar = () => {
    const { user,logOut,googlesign } = useContext(Authcontext)
    const [loggedinUser ,setLoggedInUser] = useState('')
    console.log(user);
    // logout
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{
            setLoggedInUser('')

        })
        .catch(err => console.log(err))
    }

    // googlesign
    const handleGoogle = ()=>{
        googlesign()
        .then(result =>{
            setLoggedInUser(result.user)
        })
        .catch(err =>{
            console.log(err)
        })

    }
    return (
        <div className='flex justify-center gap-4 items-center flex-col border-2 border-cyan-400 rounded-lg'>
            <div className="navbar  rounded-lg  flex-1   justify-center  ">
                <img className='w-[50px] h-[50px] rounded-full' src="https://i.ibb.co/9pn7svT/4k-tech-0agxdfta55vf3gym.jpg" alt="" />
                <a className="btn btn-ghost italic  normal-case text-xl font-poppins">Tech-city</a>
            </div>

            <div className=' flex justify-center flex-wrap  space-x-1 md:space-x-4  flex-1 my-5 lg:my-0'>
                <NavLink to={"/"} activeStyle={activeLinkStyle}  > <button className='btn btn-ghost underline' >HOME</button> </NavLink>
                <NavLink to={"/addProduct"}> <button className='btn btn-ghost underline' >Add Product</button> </NavLink>
                <NavLink to={"/myCart"}> <button className='btn btn-ghost underline'>my cart</button> </NavLink>
                <NavLink to={"/Register"}> <button className='btn btn-ghost underline'>Register</button> </NavLink>
                {
                    user ? <button onClick={handleSignOut} className='btn btn-ghost mt-2 underline'> sign out</button> :

                        // <NavLink to={"/Login"}> <button className='btn'> Log in</button></NavLink>
                        <NavLink to={"/Login"}><button className='btn btn-ghost underline'> Log in</button></NavLink>


                }
                <button className='btn btn-ghost underline' onClick={handleGoogle}>Sign in with google</button>
                {
                    user && <div className='flex items-center gap-3'>
                        <h1 className='underline p-2 rounded-lg font-bold'>
                            {user?.displayName}
                        </h1>
                        <p><img className='w-3/6 h-[40px] rounded-full' src={user?.photoURL} alt="" /></p>


                    </div>
                }
                {
                        loggedinUser&& <div>
                            <h1 className='underline p-2 rounded-lg font-bold flex items-center '>
                                {/* <span> <img src={loggedinUser.photoURL} alt="" /></span> */}
                                <p><img className='w-3/6 rounded-full' src={loggedinUser.photoURL} alt="" /></p>

                              {loggedinUser.displayName}
                            </h1>
                            {/* <p> pic : <img src={loggedinUser.photoURL} alt="" /> </p> */}
                        </div>
                    }




            </div>

        </div>
    );
};

export default NavBar;
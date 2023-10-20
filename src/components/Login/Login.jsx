import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../AuthProvider/AuthProvider';

const LogIn = () => {

    const nevigate = useNavigate()
    const location = useLocation()
    const [errors , setError] = useState()
    const {signin} = useContext(Authcontext)




    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        // const name = form.get("name")
        console.log(email, password, name)


        // setError("")
        signin(email, password)
            .then(result => {

                console.log(result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'sucessfully Logged in',
                    showConfirmButton: false,
                    timer: 1500
                  })

                nevigate(location?.state ? location.state : "/")

            })
            .catch(err => {
                setError(err.message)
                Swal.fire({
                    title: `${errors}`,
                    text: '',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })

            })





    }








    return (
        <div>
           

            <h1 className="text-5xl font-bold text-center">Log In here!!!</h1>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin}  className="card-body">

                           
                            {/* email field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* button */}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='my-5'>
                            <h1 className='text-center'>New Here!!!
                                <Link to={"/Register"} ><span className='text-base text-blue-600 underline'> register here</span></Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
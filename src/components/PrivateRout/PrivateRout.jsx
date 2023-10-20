/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';

const PrivateRout = ({children}) => {
    const location = useLocation()
    const { user, loading } = useContext(Authcontext)
    if (user) {
        return children
    }
    if (loading) {
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    // return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
    <Navigate state={location.pathname} to={"/Login"}  ></Navigate>
};

export default PrivateRout;
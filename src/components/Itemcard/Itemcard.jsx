/* eslint-disable react/prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Itemcard = ({data}) => {
    console.log(data)
    const { image, brandName,name,price,rating_2,short_description,type, _id } = data
    return (
        <div>
           
            <div className="card card-compact  border-2 border-cyan-200 shadow-xl">
                <figure><img className='w-full h-[40vh]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p className='text-lg font-bold'> Brand: <span className='font-normal'>{brandName}</span> </p>
                    <h1 className='text-lg font-bold'> type: <span className='font-normal'>{type}</span></h1>
                    <h1 className='text-lg font-bold'> <span className='text-red-600'>{price}$</span> </h1>
                    <h1 className='text-lg font-bold'> Rating: {rating_2}<span className='font-extrabold text-orange-400 text-2xl'>*</span> </h1>
                    <Link   to={`/Details/${_id}`}><button className='btn btn-ghost border-2 border-cyan-100'> Details</button></Link>
                    
                    <NavLink to={`/Update/${_id}`}><button className='btn btn-ghost border-2 border-cyan-100'>Update</button></NavLink>
                    
                </div>
            </div>

        </div>
    );
};

export default Itemcard;
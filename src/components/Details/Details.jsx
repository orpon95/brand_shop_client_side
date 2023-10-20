import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./Details.css"
import Swal from 'sweetalert2'

const Details = () => {
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(data);
    console.log(id);


    const singleData = data.find(aData => aData?._id === id)
    // console.log(singleData);
    const { image, price, brandName, short_description, rating_2, type, _id, name } = singleData

    const cartData = { image, price, brandName, short_description, rating_2, type, _id, name }
    // console.log( "cart valu", cartData);

    const handleCart = () => {

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)


        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                else {
                    Swal.fire({
                        title: 'error!',
                        text: 'something wrong ,pls try again',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })


                }
            })
    }




    return (
        <div>
            <h2 className="card-title flex justify-center my-9">Brand: <span className='color-changing-text'>{brandName}</span></h2>


            <div className='flex justify-center'>
                <div className="card w-96 border-2 border-cyan-300 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>{name}</p>
                        <h1> Price: <span className='text-red-500'>{price}$</span> </h1>
                        <h1 className='italic text-2xl font-extrabold'>  {short_description} </h1>
                        <div className="card-actions justify-center">
                            <button onClick={handleCart} className="btn btn-ghost border-2 border-cyan-300">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
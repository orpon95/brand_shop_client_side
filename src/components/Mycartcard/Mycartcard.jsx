/* eslint-disable react/prop-types */
import React from 'react';
import Swal from 'sweetalert2'

const Mycartcard = ({ data }) => {
    console.log(data)
    const { image, price, brandName, short_description, rating_2, type, _id, name } = data

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                fetch(`http://localhost:5000/cart/${id}`,{
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })
                    
            }
        })

    }
    return (
        <div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>price: <span className='text-red-500'> {price}$</span></p>
                    <div className="card-actions">
                        <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete from cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mycartcard;
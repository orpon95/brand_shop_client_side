import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {
    const [rating, setRating] = useState(0)

    const particularData = useLoaderData()
    console.log(particularData);
    const { image, brandName, name, price, rating_2, short_description, type, _id } = particularData

    const handleRating = (newRatiing) => {
        setRating(newRatiing)
    }


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const image = form?.image?.value;
        const name = form?.name?.value;
        const brandName = form?.brandName?.value;
        const type = form?.type?.value;
        const price = form?.price?.value;
        const short_description = form?.short_description?.value;
        const rating_2 = rating;

        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const updatedProduct = {
            image, name, brandName, type, price, short_description, rating_2
        }
        console.log(updatedProduct);
        // post api
        fetch(`https://brand-shop-844bnpgxw-yeasins-projects-c520e666.vercel.app/add/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'product updated successfully',
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
            <div className='my-11'>
                <form onSubmit={handleUpdate} className='p-5 shadow-2xl space-y-6 border-2 border-cyan-300 rounded-2xl w-[70%] mx-auto' action="">

                    {/* image */}
                    <div className='text-center'>
                        <label htmlFor="image" className='text-xl font-bold '>image URL</label>
                        <input type="text" defaultValue={image} placeholder="Type product valid image url" required name='image' className=" flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />
                    </div>
                    {/* name */}
                    <div  className='text-center'>
                        <label htmlFor="image" className='text-xl font-bold '>name</label>
                        <input type="text" defaultValue={name} placeholder="Type product name" required name='name' className=" flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />
                    </div>

                    {/* brand name */}
                    <div  className='text-center'>
                        <label htmlFor="brandName" className='text-xl font-bold '>brandName</label>
                        <select
                            className='flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300'

                            name="brandName"
                            required
                            defaultValue={brandName}


                        >
                            <option value="Apple">Apple</option>
                            <option value="Google">Google</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="Samsung">Samsung</option>
                            <option value="OnePlus">OnePlus</option>
                            <option value="Huawei">Huawei</option>

                        </select><br />
                    </div>
                    {/* type */}
                    <div  className='text-center'>
                    <label htmlFor="short description" className='text-xl font-bold '>Type</label>
                        <select
                            className='flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300'

                            name="type"
                            required
                            defaultValue={type}


                        >
                            <option value="phone" className='text-xl font-bold '>phone</option>
                            <option value="computer">computer</option>

                        </select><br />
                    </div>


                    {/* price */}
                    <div  className='text-center'>
                        <label htmlFor="price" className='text-xl font-bold '>price</label>
                        <input type="text" defaultValue={price} placeholder="price" required name='price' className=" flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />
                    </div>
                    {/* short des */}
                    <div  className='text-center'>
                        <label htmlFor="short description" className='text-xl font-bold '>short description</label>
                        <input type="text" defaultValue={short_description} required placeholder="short description" name='short_description' className="flex-1 input input-bordered w-full max-w-xs mx-3 bg-transparent shadow-2xl border-2 border-cyan-300" /> <br />

                    </div>

                    {/* rating */}
                    <div  className='text-center'>
                    <label htmlFor="rating" className='text-xl font-bold '>rating</label>
                    <div className="rating" defaultValue={rating}>
                        <input type="radio" onClick={() => handleRating(1)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(2)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(3)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(4)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(5)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    </div>

                    <div className='text-center'>
                        <button type='submit' className='btn btn-ghost text-center border-2 border-cyan-300 '  > Update </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Update;
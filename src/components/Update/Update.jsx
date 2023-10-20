import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Update = () => {
    const [rating,setRating] = useState(0)

    const particularData = useLoaderData()
    console.log(particularData);
    const { image, brandName,name,price,rating_2,short_description,type, _id }= particularData

    const handleRating = (newRatiing)=>{
      setRating(newRatiing)
    }


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const rating_2 = rating;

        // console.log(image,name,brandName,type,price,short_description,rating_2);
        const updatedProduct = {
            image, name, brandName, type, price, short_description, rating_2
        }
        console.log(updatedProduct);
        // post api
        fetch(`http://localhost:5000/add/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount  >0) {
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
                <form onSubmit={handleUpdate}  className='space-y-6 border-2 border-red-400 w-[70%]' action="">

                    {/* image */}
                    <label htmlFor="image">image URL</label>
                    <input type="text" defaultValue={image} placeholder="Type product valid image url" required name='image' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                    {/* name */}
                    <label htmlFor="image">name</label>
                    <input type="text" defaultValue={name} placeholder="Type product name" required name='name' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />

                    {/* brand name */}
                    <label htmlFor="brandName">brandName</label>
                    <select
                        className='border-2 border-blue-300 p-3 flex-1'

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
                    {/* type */}
                    <select
                        className='border-2 border-blue-300 p-3 flex-1'

                        name="type"
                        required
                        defaultValue={type}


                    >
                        <option value="phone">phone</option>
                        <option value="computer">computer</option>

                    </select><br />


                    {/* price */}
                    <label htmlFor="price">price</label>
                    <input type="text" defaultValue={price} placeholder="price" required name='price' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                    {/* short des */}
                    <label htmlFor="short description">short description</label>
                    <input type="text" defaultValue={short_description} required placeholder="short description" name='short_description' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />


                    {/* rating */}
                    <label htmlFor="rating">rating</label>
                    <div className="rating" defaultValue={rating}>
                        <input type="radio" onClick={() => handleRating(1)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(2)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(3)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(4)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" onClick={() => handleRating(5)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <div>
                        <button type='submit' className='btn'  > Update </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Update;
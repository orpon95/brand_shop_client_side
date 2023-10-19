import React, { useState } from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const [rating , setRatting] = useState(0)

    const handleRating = (newRatiing)=>{
        setRatting(newRatiing)
    }

    const handleAdd = e => {
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
        const newProduct = {
            image, name, brandName, type, price, short_description, rating_2
        }
        console.log(newProduct);
        // post api
        fetch("http://localhost:5000/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
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
        <div className='my-11'>
            <form onSubmit={handleAdd} className='space-y-6 border-2 border-red-400 w-[70%]' action="">

                {/* image */}
                <label htmlFor="image">image URL</label>
                <input type="text" placeholder="Type product valid image url" required name='image' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                {/* name */}
                <label htmlFor="image">name</label>
                <input type="text" placeholder="Type product name" required name='name' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />

                {/* brand name */}
                <label htmlFor="brandName">brandName</label>
                <select
                    className='border-2 border-blue-300 p-3 flex-1'

                    name="brandName"
                    required


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


                >
                    <option value="phone">phone</option>
                    <option value="computer">computer</option>

                </select><br />


                {/* price */}
                <label htmlFor="price">price</label>
                <input type="text" placeholder="price" required name='price' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />
                {/* short des */}
                <label htmlFor="short description">short description</label>
                <input type="text" required placeholder="short description" name='short_description' className=" flex-1 input input-bordered w-full max-w-xs mx-3" /> <br />


                {/* rating */}
                <label htmlFor="rating">rating</label>
                <div className="rating">
                    <input type="radio" onClick={()=>handleRating(1)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" onClick={()=>handleRating(2)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" onClick={()=>handleRating(3)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" onClick={()=>handleRating(4)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" onClick={()=>handleRating(5)} name="rating_2" className="mask mask-star-2 bg-orange-400" />
                </div>

                <div>
                    <button type='submit' className='btn'  > add </button>
                </div>

            </form>

        </div>
    );
};

export default AddProduct;
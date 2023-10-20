import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Itemcard from '../Itemcard/Itemcard';
import ItemcardBanner from '../ItemcardBanner/ItemcardBanner';

const Productcard = () => {
    const { brandname } = useParams()
    const productDatas = useLoaderData()

    const { brandName } = productDatas
    // console.log(productDatas);
    // console.log(brandname);
    const brandData = productDatas.filter(productData => productData?.brandName === brandname)
    console.log(brandData)

    return (
        <div>
            <ItemcardBanner></ItemcardBanner>
            <h2 className='text-4xl font-extrabold my-12 border-b-2 border-red-500 text-center italic '> Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center'>
                {

                    brandData.length == 0 ?

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body justify-center ">
                                <h2 className="card-title text-red-500">sry No product available</h2>


                            </div>
                        </div>

                        :

                        brandData.map(aBrandData => <Itemcard key={aBrandData._id} data={aBrandData} ></Itemcard>)


                }
            </div>

        </div>
    );
};

export default Productcard;
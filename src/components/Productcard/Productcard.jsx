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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {

                    brandData.map(aBrandData => <Itemcard key={aBrandData._id} data={aBrandData} ></Itemcard>)


                }
            </div>

        </div>
    );
};

export default Productcard;
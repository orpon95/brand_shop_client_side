import React from 'react';

const ItemcardBanner = () => {
    return (
        <div className='my-10'>
            <div className="carousel w-full">
                {/* apple */}
                <div id="slide1" className="carousel-item relative w-full h-[40vh] items-center">
                    <img src="https://i.ibb.co/7vhYH8p/iphone-15-pro-wallpaper-2.webp" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div>
                        <h1 className='text-red-700 font-black text-4xl'>A city of Apple</h1>
                    </div>
                </div>
                {/* google */}
                <div id="slide2" className="carousel-item relative w-full h-[40vh]">
                    <img src="https://i.ibb.co/SQhFSYY/pixel-7-colors-2.webp" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div>
                        <h1 className='text-red-700 font-black text-4xl'>A city of Apple</h1>
                    </div>
                </div>
                {/* xiaomi */}
                <div id="slide3" className="carousel-item relative w-full h-[40vh] ">
                    <img src="https://i.ibb.co/jzp7zdH/xiaomi-redmi-note-8-2.jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div>
                        <h1 className='text-red-700 font-black text-4xl'>A city of Apple</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemcardBanner;
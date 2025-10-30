import React from 'react';

const TopRated = () => {
    return (
        <div className='mb-20'>
            <h1 className='text-center font-bold text-4xl md:text-5xl mt-5 mb-10'>Top Rated Providers</h1>
            <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-move flex md:flex-row flex-col gap-5 items-center justify-around py-10 px-5 lg:px-0'>
                
                <div>
                    <img className='w-80 h-65 rounded-xl my-4' src="https://i.ibb.co.com/zw07q2n/Provider-03.jpg" alt="" />
                    <h2 className='text-center text-white font-semibold text-2xl'>Melissa Stark</h2>
                    <p className='text-center text-gray-200 font-semibold text-lg'>Email: stark07@skillnest.com</p>
                </div>
                <div>
                    <img className='w-80 h-65 rounded-xl my-4' src="https://i.ibb.co.com/xtB1QDCz/Provider-01.jpg
" alt="" />
                    <h2 className='text-center text-white font-semibold text-2xl'>Shawn Paul</h2>
                    <p className='text-center text-gray-200 font-semibold text-lg'>Email: shawn07@skillnest.com</p>
                </div>
                <div>
                    <img className='w-80 h-65 rounded-xl my-4' src="https://i.ibb.co.com/trcZxhS/Provider-02.jpg " alt="" />
                    <h2 className='text-center text-white font-semibold text-2xl'>Mark Roger</h2>
                    <p className='text-center text-gray-200 font-semibold text-lg'>Email: roger07@skillnest.com</p>
                </div>


{/* https://i.ibb.co.com/zw07q2n/Provider-03.jpg
*/}

            </div>
        </div>
    );
};

export default TopRated;
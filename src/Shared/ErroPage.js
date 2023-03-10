import React from 'react';
import { BeakerIcon, HandThumbDownIcon } from '@heroicons/react/24/solid'
const ErroPage = () => {
    return (
     <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <HandThumbDownIcon className="h-40 w-40 text-green-400 "/>

        <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                <span className='sr-only'>Error</span>
                <div className='flex justify-center items-center h-full'>
                    4
                    <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
                    4
                </div>
            </h2>

        </div>
        
        </div>

     </section>
    );
};

export default ErroPage;
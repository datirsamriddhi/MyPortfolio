import React from 'react';
import {AppText, hobby} from "../Constants";
import {hobbyy, skillpot1} from "../assets";

const Hobbies = () => {
    return (
        <div id='hobbies'>
            <div className='flex flex-row md:mt-0 xls:mt-1 justify-center items-center'>
                <h1 className='md:text-[40px] xls:text-[28px] font-bold'><span
                    className='text-black'>{AppText.Hobby1}</span><span
                    className='text-[#6E2142]'>{AppText.Hobby2}</span></h1>
                <img src={hobbyy}
                     className="md:w-[100px] xls:w-[80px] xls:mx-4 transition ease-in-out delay-100 hover:scale-110 md:ml-4"
                     alt=''/>
            </div>

            <div className="flex pt-4 mx-9 mb-4 md:px-0 items-start">
                <div className="grid md:grid-cols-4 xls:grid-cols-2 gap-4 gap-y-8 w-full">
                    {hobby.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start"
                        >
                            <h3 className="md:text-3xl xls:text-2xl mr-3 text-black font-bold">{item.logo}</h3>
                            <h3 className="md:text-xl xls:text-lg text-[#943855] font-bold">{item.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
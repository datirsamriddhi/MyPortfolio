import React, { useState } from 'react';
import { contactme, tele } from '../assets';
import { AppText } from '../Constants';
import { TbMailShare } from "react-icons/tb";
import SectionHeading2 from "../Shared/SectionHeading2";

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div id="contact">
            <div className='relative m-0 overflow-hidden'>
                <div className='flex flex-row justify-center '>
                    <img src={tele} className="w-[80px]" alt=''/>
                    <SectionHeading2 firstTitle={AppText.Contact} secondTitle={AppText.Us} className='mb-20 ml-8'/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
                    <img src={contactme} className="w-[320px] mr-24" alt=''/>
                    <div className='w-full'>
                        <form>
                            <div className='flex my-4 flex-col'>
                                <label className='text-gray-400 mb-1'>Email</label>
                                <input
                                    type="email"
                                    placeholder='yourname@gmail.com'
                                    className='border-[1.5px] px-2 py-2 border-[#FFD692] hover:border-[#E16363] rounded-md'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <label className='text-gray-400 my-2 text-start justify-start items-start'>Message</label>
                            <textarea
                                type="text"
                                rows={7}
                                placeholder='Type your message here'
                                className='border-[1.5px] w-full px-2 mt-1 py-2 border-[#FFD692] hover:border-[#E16363] rounded-md'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <div className='flex flex-col mb-2 items-center justify-center'>
                                <button
                                    type="submit"
                                    className='transition-all w-5/12 h-scale-110 ease-in-out hover:scale-110 bg-[#6E2142] flex flex-row items-center justify-center text-base py-2 mt-5 text-white rounded-md'>
                                    Submit
                                    <TbMailShare className={'mx-2 text-lg'} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;

import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import Logo from "./gmailLogo.png"
import Profile from "./Profile2.png"
import { IoIosSearch } from 'react-icons/io';
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../../redux/appSlice';
const Navbar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
          dispatch(setSearchText(input))
    },[input])
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-100'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <RxHamburgerMenu size={"20px"}/>
                </div>
                <img className='w-8' src={Logo} alt="gmail-logo" />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-25 ml-12'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch size={"24px"} className='text-gray-700'/>
                <input 
                 type="text"
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                 placeholder='Search Mail'
                 className='rounded-full w-full bg-transparent outline-none px-1' />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiCircleQuestion size={'24px'} />    
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiSettings size={'24px'} />    
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={'24px'} />    
                </div>
                <div className='cursor-pointer'>
                    <Avatar src={Profile} size='40' round={true}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
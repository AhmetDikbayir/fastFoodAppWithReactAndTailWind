import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaWallet, FaUserFriends} from 'react-icons/fa';

const Navbar = () => {

    const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/*Left side*/}
        <div className='flex items-center'>
            {/**Open the navbar with this button 
             * Change the nav value */}
            <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pick Up</p>
            </div>
        </div>
        {/*Search bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search food' />
        </div>
        {/*Cart button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 pr-4 rounded-full'>
            <BsFillCartFill size={20} className='mx-2' />Cart
        </button>
        {/*Mobile Menu*/}
        {/**Overlay */}
        {/**if nav true navbar open other hand close */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/*Side drawer menu */}
        {/**Open the Navbar with this code */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 transition delay-300 duration-700 ease-in-out' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 transition delay-300 duration-700 ease-in-out'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-2 top-2 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <TbTruckDelivery className='mr-4' />Orders
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <MdFavorite className='mr-4' />Favorites
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <FaWallet className='mr-4' />Wallet
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <MdHelp className='mr-4' />Help
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <AiFillTag className='mr-4' />Promotions
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <BsFillSaveFill className='mr-4' />Best Ones
                    </li>
                    <li className='text-xl py-4 flex items-center px-2'>
                        <FaUserFriends className='mr-4' />Invite Friends
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import Logo from '../public/assets/logo.png'
import { Menu, Transition } from '@headlessui/react'
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
function classNames(...classes) {
    return classes.filter(Boolean).join("")
}

const Navbar = () => {
    const [nav, setNav] = useState(false)
    function handleNav() {
        setNav(!nav)
    }
    return (
        <div className='fixed h-14 flex flex-nowrap items-center w-full bg-[#0e0e10] p-4 z-10 mb-[2px] '>
            {/* Left Side */}
            <div className='flex grow items-center justify-start'>
                <Link href="/">
                    <Image src={Logo} height="36" width="36" className='cursor-pointer z-10' />
                </Link>
                <p className='p-4'>Browse</p>
                <div className='p-4'>
                    <Menu as='div' className='relative text-left'>
                        <div className='flex'>
                            <Menu.Button>
                                <BsThreeDotsVertical size={20} />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                        >
                            <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                                <div className='py-1'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href='#'
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-500 text-gray-100'
                                                        : 'text-gray-200',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {/* Middle Side */}
            <div className='hidden md:flex grow-[2] items-center justify-center'>
                <div className='bg-gray-500 text-white flex items-center justify-between max-w-[400px] w-full m-auto p-2 rounded-2xl'>
                    <div>
                        <input type="text" className='bg-transparent focus:outline-none border-none text-white' placeholder='Search' />
                    </div>
                    <div><BsSearch /></div>
                </div>
            </div>
            {/* Right Side */}
            <div className='hidden md:flex grow items-center justify-end'>
                <div className='flex items-center'>
                    <Link href="/">
                        <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>Account</button>
                    </Link>
                    <BsPerson size="20" />
                </div>
            </div>
            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            {/* Mobile Menu */}
            <div className={nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex items-center justify-center ease-in duration-300 ' : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex items-center justify-center ease-in duration-300 '}>
                <ul className='text-center'>
                    <li className='font-bold text-3xl p-4'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='font-bold text-3xl p-4'>
                        <Link href="/">Live Channels</Link>
                    </li>
                    <li className='font-bold text-3xl p-4'>
                        <Link href="/">Top Categories</Link>
                    </li>
                    <li className='font-bold text-3xl p-4'>
                        <Link href="/">Account</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
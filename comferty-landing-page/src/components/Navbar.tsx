import React from 'react'
import Image from 'next/image'
import { Info, Menu } from 'lucide-react'
export default function Navbar() {
    // nav-top-right
    return (
        <main>
            <section id='top' className='bg-[#272343] w-full'>
                <div className='flex justify-between px-[300px] py-[14px]'>
                    <div id='shipping' className='opacity-70 flex'>
                        <Image
                            src={'/Vector-2.svg'}
                            width={10.67}
                            height={7.33}
                            alt='navbar vector tick'
                            className='mr-[8px]'
                        />
                        <p className='text=[13px] text-white'>Free shipping on all orders over $50</p>
                    </div>
                    <div id='link'>
                        <ul className='flex opacity-70 text-[13px]'>
                            <div className='flex mr-[24px]'>
                                <li className='text-white mr-[6px]'>Eng</li>
                                <Image
                                    src={'/nav-top-right.svg'}
                                    width={10.67}
                                    height={7.33}
                                    alt='navbar vector tick'
                                />
                            </div>

                            <div className='flex mr-[24px]'>
                                <li className='text-white mr-[6px]'>USD</li>
                                <Image
                                    src={'/nav-top-right.svg'}
                                    width={10.67}
                                    height={7.33}
                                    alt='navbar vector tick'
                                />

                            </div>

                            <li className='mr-[24px] text-white'>Faqs</li>
                            <div className='flex  items-center'>
                                <Info className='text-white w-[13.33px] h-[13.33px] mr-[6px]' />
                                <li className='text-white '>Need Help</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

            {/* middle  */}
            <section id='middle'>
                <div className='flex justify-between  px-[300px] py-[20px] bg-[#F0F2F3]'>
                    <div id='chair' className='flex items-center'>
                        <Image
                            src={'/chair-Icon.svg'}
                            width={40}
                            height={40}
                            alt='chair logo'
                            className='mr-[8px]'
                        />
                        <p className='text-[26px] font-medium'>Comforty</p>
                    </div>

                    <div id='search-bar' className=' relative border rounded-[5px] w-[413px] h-[44px] py-[11px] pl-[16px] pr-[40px] bg-white'>
                        <div className='absolute inset-y-0 left-0 flex justify-end w-full pointer-events-none pr-[16px]'>
                            <Image
                                src={'nav-search-log.svg'}
                                width={22}
                                height={22}
                                alt='/navbar search logo'
                                className=''
                            />
                        </div>
                        <input type="text" placeholder='Search here...' className='  w-full h-full focus:outline-none ' />

                    </div>
                    <div id='user-links' className='flex gap-[12px]'>
                        <div id='cart' className='border bg-white rounded-[8px] gap-[12px] flex px-[16px] cursor-pointer hover:bg-slate-200 transition duration-300'>
                            <div className='flex  items-center  gap-[8px]'>

                                <Image
                                    src={'cart-buy.svg'}
                                    width={22}
                                    height={22}
                                    alt='cart logo'
                                    className=''
                                    style={{ color: "#272343" }}
                                />
                                <p className='text-[12px] leading-[110%] text-[#272343] font-medium'>Cart</p>
                            </div>
                            <div className='flex items-center'>
                                <input type="text" placeholder='2' disabled className='rounded-[100%] w-[20px] h-[20px] bg-[#007580] placeholder:text-center placeholder:text-white  ' />
                            </div>
                        </div>
                        <div id='heart' className='flex items-center justify-center border rounded-[8px] w-[44px] h-[44px] bg-white py-[11px] cursor-pointer hover:bg-slate-200 transition duration-300'>
                            <div className=' w-[22px]flex  items-center '>
                                <Image
                                    src={'nav-heart.svg'}
                                    width={17.41}
                                    height={16.5}
                                    alt='navbar heart icon'
                                    style={{ color: "#272343" }}
                                    className=''
                                />
                            </div>
                        </div>
                        <div id='user' className='flex items-center justify-center border rounded-[8px] w-[44px] h-[44px] bg-white py-[11px] cursor-pointer hover:bg-slate-200 transition duration-300'>
                            <div className=' w-[22px]flex  items-center '>
                                <Image
                                    src={'nav-user-icon.svg'}
                                    width={13.15}
                                    height={16.87}
                                    alt='navbar heart icon'
                                    style={{ color: "#272343" }}
                                    className='font-medium'

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* links section */}
            <section id='links' className='border-b-2'>
                <div className='px-[300px] py-[14px] flex justify-between'>
                    <div id='left' className='flex gap-[32px] items-center'>
                        <div className='flex border px-[24px] py-[16px] rounded-[6px] gap-[16px] '>
                            <Menu/>
                            <p>All Categories</p>
                        </div>
                        <ul className='flex gap-[32px] text-[#636270] cursor-pointer'>
                            <li className='hover:text-[#007580] transition duration-300'>Home</li>
                            <li className='hover:text-[#007580] transition duration-300'>Shope</li>
                            <li className='hover:text-[#007580] transition duration-300'>Product</li>
                            <li className='hover:text-[#007580] transition duration-300'>Pages</li>
                            <li className='hover:text-[#007580] transition duration-300'>About</li>
                        </ul>
                    </div>
                    <div id='right' className='my-auto'>
                        <p><span className='text-[#636270]'>Contact: </span><span className='text-[#272343] font-medium text-[14px]'>{'(808) 555-0111'}</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

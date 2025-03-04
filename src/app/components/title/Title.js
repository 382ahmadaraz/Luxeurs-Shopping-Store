
"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import PriceFilter from '../slider/Slider'
import h3 from "../../assets/icons/3-h.png"
import two from "../../assets/icons/2.png"
import three from "../../assets/icons/3.png"
import four from "../../assets/icons/4.png"
import filterImg from "../../assets/icons/filter.png"
import { useState } from 'react'


export default function Title(props) {

    const [filter, setFilter] = useState(false)

    const filterHandle = () => {
        setFilter(!filter)
    }

    return (
        <div className=' 2xl:w-[94rem] m-auto '>
            <div className=' h-[13rem]  w-full borde text-center items-center py-11'>
                <p className='text-5xl font-light'>{props.title}</p>
                <div className='flex items-center justify-center gap-2 mt-4'>
                    <p className='[&>*]:ml-2 tracking-widest text-lightDark text-sm'><Link href={"/"}> <span className='hover:text-lightBlue cursor-pointer mr-1'>Home</span></Link> &gt;<Link href={"/collections/products"} scroll={false}><span className='hover:text-lightBlue cursor-pointer mr-1'>Products</span></Link>&gt;</p>
                    <p>{props.name}</p>
                </div>
            </div>
            <div className='flex justify-center w-full '>

                {/* side part  */}
                <div className='hidden lg:block  flex flex-col  h-[50%] w-[25%] pl-3'>
                    <select className='w-[95%] p-3 outline-none my-3 text-lg items-center'>
                        <option className='w-full'>Collections</option>
                    </select>
                    <hr className=' w-[95%] m-auto' />

                    {/* Radio btn Area */}
                    <select className='w-[95%] p-3 outline-none my-3 text-lg items-center'>
                        <option className='w-full'>Availability</option>
                    </select>
                    <div className='flex flex-col justify-start gap-3 pl-5 [&>*]:text-lightDark mb-3'>
                        <label className='hover:text-black'><input type='radio' className='mr-2' />In stock({props.instock})</label>
                        <label className='hover:text-black'><input type='radio' className='mr-2' />Out of stock({props.outstock})</label>
                    </div>
                    <hr className=' w-[95%]' />
                    <PriceFilter />
                    {/* <input type='range'/> */}

                </div>


                {/* component part  */}
                <div className='w-[100%] lg:w-[75%] '>
                    <div className=' flex justify-between xs:px-7 mb-7 items-center w-full '>

                        <div onClick={filterHandle} className='lg:hidden flex items-center gap-2 border border-black p-2 px-5'>
                            <Image src={filterImg} alt='filter' className='h-[20px] w-[20px]'></Image>
                            <button className='font-semibold text-sm sm:text-md'>FILTER </button>
                        </div>

        {/* onClick filter show  */}
                        {filter && (
                            <div scroll={false} className=' fixed top-0 left-0 z-40 bg-white h-full w-[16rem]'>
                                <button onClick={() => { setFilter(false) }} className='absolute right-3 my-3 p-2 px-4 text-red-500 font-bold  bg-lightBlue rounded-md'>close</button>
                                <div className='flex flex-col pl-3 mt-20'>
                                    <select className='w-[95%] p-3 outline-none my-3 text-lg items-center'>
                                        <option className='w-full'>Collections</option>
                                    </select>
                                    <hr className=' w-[95%] m-auto' />

                                    {/* Radio btn Area */}
                                    <select className='w-[95%] p-3 outline-none my-3 text-lg items-center'>
                                        <option className='w-full'>Availability</option>
                                    </select>
                                    <div className='flex flex-col justify-start gap-3 pl-5 [&>*]:text-lightDark mb-3'>
                                        <label className='hover:text-black'><input type='radio' className='mr-2' />In stock({props.instock})</label>
                                        <label className='hover:text-black'><input type='radio' className='mr-2' />Out of stock({props.outstock})</label>
                                    </div>
                                    <hr className=' w-[95%]' />
                                    <PriceFilter />

                                </div>
                            </div>
                        )}


                        <select className='p-2 sm:px-5 outline-none border border-black'>
                            <option>Best selling</option>
                            <option>Date, new to old</option>
                            <option>Date, old to new</option>
                            <option>Best selling</option>
                            <option>Price, low to high</option>
                            <option>Price, high to low</option>

                        </select>

                        <div className='hidden lg:block '>
                            <div className='flex gap-3 [&>*]:shadow-md [&>*]:p-2 [&>*]:border [&>*]:cursor-pointer  [&>*]:rounded-full [&>*]:h-[36px] [&>*]:w-[36px]'>
                                <Image src={two} alt='one-line' className='hover:bg-lightBlue hover:text-white ' />
                                <Image src={three} alt='one-line' className='border-none bg-lightBlue hover:text-white ' />
                                <Image src={four} alt='one-line' className='hover:bg-lightBlue hover:text-white ' />
                                <Image src={h3} alt='one-line' className='hover:bg-lightBlue hover:text-white ' />
                            </div>
                        </div>
                    </div>

                    {/* here i take the props of a component  */}
                    <div className=' lg:w-[] m-auto flex flex-nowrap '>
                        {props.component}

                    </div>


                    <div className='flex items-center justify-center my-9 mb-16'>
                        <button className='py-3 px-11 bg-white border border-black text-black cursor-pointer hover:bg-lightBlue hover:text-white'>Load More</button>
                    </div>

                    {/* detail props  */}
                    <div>
                        {props.details}
                    </div>
                </div>
            </div>
        </div>
    )
}

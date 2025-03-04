import React from 'react'

export default function ContactUsComp() {
    return (
        <div className='flex flex-wrap lg:flex-nowrap justify-evenly items-center 2xl:w-[80%] m-auto my-11'>
            {/* fields  */}
            <div className='w-[90%] lg:w-[60%] xl:w-[55%] 2xl:w-[66%] mt-11 ' >
                <p className='w-[90%] md:w-[100%] m-auto text-3xl lg:text-4xl font-thin mb-7'>Get In Touch</p>

                <div className='flex flex-wrap   justify-between w-[90%] text-sm m-auto lg:m-0 md:w-[99%] [&>*]:w-full md:[&>*]:w-[33%]'>
                    <div className='flex flex-col'>
                        <label className='my-2 font-bold'>Name</label>
                        <div className='flex items-center justify-between p-3 border'>
                            <input type='text' placeholder='Your Name' className=' outline-none ' />
                            <p className='text-red-500 text-xl'>*</p>
                        </div>                </div>
                    <div className='flex flex-col'>
                        <label className='my-2 font-bold'>Email</label>
                        <div className='flex items-center justify-between p-3 border'>
                            <input type='email' placeholder='Your Email' className=' outline-none ' />
                            <p className='text-red-600 text-xl'>*</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='my-2 font-bold'>Phone</label>
                        <div className='flex items-center justify-between p-3 border'>
                            <input type='number' placeholder='Your Phone number' className=' outline-none ' />
                            <p className='text-red-600 text-xl'>*</p>
                        </div>
                    </div>
                </div>
                <div className='my-4 w-[90%] md:w-[100%] m-auto'>
                    <label className='font-bold'>Message</label>
                    <textarea className='w-full min-h-32 md:min-h-[200px] xl:min-h-[200px] p-3 my-4 border outline-none' placeholder='Your Message ...'> </textarea>
                </div>
                <div className='my-4 pl-4 md:pl-0'>
                    <button className='text-white text-sm md:text-md bg-black p-4 md:px-20 hover:text-black hover:bg-white hover:border'>Send Message</button>
                </div>
            </div>

            {/* address  */}
            <div className='w-[90%] lg:w-[30%] xl:w-[30%]  my-11  relative bottom-4' >
                <p className='text-xl my-3'>Head Office Address:</p>
                <p>Plot C-145, Block 4, Karachi Administration Employees Society, Faisalabad, Pakistan</p>
                <hr className=' my-5' />

                <p className=' text-xl my-3'>Tariq Road Outlet:</p>
                <p>Shop # 6, Uzma Centre, main Tariq Road (Opposite Dolmen Centre) Faisalabad, Pakistan</p>
                <hr className=' my-5' />

                <p className=' text-xl my-3'>For Whatsapp (for chat):</p>
                <p>+92 3020408062</p>
                <hr className=' my-5' />

                <p className=' text-xl my-3'>EMAIL</p>
                <p>luxeurs@gmail.com</p>
            </div>
        </div>
    )
}

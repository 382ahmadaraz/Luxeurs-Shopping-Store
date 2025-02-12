import React from 'react'

export default function ContactUsComp() {
  return (
    <div className='flex justify-center gap-14 items-center h-[100vh] [&>*]: -2'>
        {/* fields  */}
        <div className='  w-[55%]  ' >
            <p className='text-3xl font-thin mb-7'>Get In Touch</p>

            <div className='flex justify-between [&>*]:'>
                <div className='flex flex-col'>
                    <label className='my-2'>Name</label>
                    <input type='text' placeholder='Your Name' className='p-3 border outline-none'/>
                </div>
                <div className='flex flex-col'>
                    <label className='my-2'>Email</label>
                    <input type='email' placeholder='Your Email' className='p-3 border outline-none '/>
                </div>
                <div className='flex flex-col'>
                    <label className='my-2'>Phone</label>
                    <input type='number' placeholder='Phone Number' className='p-3 border outline-none'/>
                </div>
            </div>
            <div className='my-4'>
                <label className=''>Message</label>
                <textarea className='w-full min-h-[200px] p-3 my-4 border outline-none' placeholder='Your Message ...'> </textarea>
            </div>
            <div className='my-4'>
                <button className='text-white bg-black p-4 px-20 hover:text-black hover:bg-white hover:border'>Send Message</button>
            </div>
        </div>

        {/* address  */}
        <div className='  w-[26%]  relative bottom-4' >
            <p className='text-xl my-3'>Head Office Address:</p>
            <p>Plot C-145, Block 4, Karachi Administration Employees Society, Faisalabad, Pakistan</p>
            <hr className='my-5'/>

            <p className='text-xl my-3'>Tariq Road Outlet:</p>
            <p>Shop # 6, Uzma Centre, main Tariq Road (Opposite Dolmen Centre) Faisalabad, Pakistan</p>
            <hr className='my-5'/>

            <p className='text-xl my-3'>For Whatsapp (for chat):</p>
            <p>+92 3020408062</p>
            <hr className='my-5'/>

            <p className='text-xl my-3'>EMAIL</p>
            <p>luxeurs@gmail.com</p>
        </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-[38%] font-light m-auto mb-16'>
          <h1 className="h-[30vh] w-full  flex items-center justify-center text-5xl">Create Account</h1>
            <div className="[&>*]:p-3 [&>*]:border [&>*]:outline-inherit [&>*]:my-3 [&>*]:w-full">
                      <input type='text' placeholder='First Name'/>
                      <input type='text' placeholder='Last Name'/>
                      <input type="text" placeholder="Email*"/> <br/>
                      <input type="passwords" placeholder="Password*"/>
            </div>
                      <p className='mb-6 text-gray-500'>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
                      </p>
              <button className="bg-black text-white w-full p-4 my-3 text-sm hover:bg-lightBlue hover:duration-[0.8s]">REGISTER</button>
              <Link href={"/account/login"}><button className="border w-full p-4 text-sm hover:bg-lightBlue hover:text-white hover:duration-[0.5s]">SIGN IN</button></Link>

    </div>
  )
}

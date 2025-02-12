import Link from "next/link";

 
export default function page() {
    return (
      <div className=" font-light">
          <h1 className="h-[30vh] w-full  flex items-center justify-center text-5xl">Account</h1>
          <div className="flex justify-center gap-11 h-[70vh]">
              <div className="w-[34%]  p-3 ">
                  <p className="text-2xl my-3">Sign in</p>
                  <div className="[&>*]:p-3 [&>*]:border [&>*]:outline-inherit [&>*]:my-3 [&>*]:w-full">
                      <input type="text" placeholder="Email*"/> <br/>
                      <input type="passwords" placeholder="Password*"/>
                  </div>
              <p className="my-4  w-fit cursor-pointer underline hover:text-lightBlue hover:duration-[0.8s]">Lost your password ?</p>
              <button className="bg-black text-white w-full p-4 text-sm hover:bg-lightBlue hover:duration-[0.8s]">SIGN IN</button>
           </div>
          <div className="w-[40%] h-[30vh] p-3">
              <p className="text-2xl my-3">New customer?</p>
              <p className="text-xl text-gray-400 my-7">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
              </p>
              <Link href={"/account/registration"}><button className="bg-black text-white w-fit px-8 p-4 text-sm hover:bg-lightBlue hover:duration-[0.8s]">REGISTER</button></Link>
  
          </div> 
          </div>
      </div>
    )
  }
   
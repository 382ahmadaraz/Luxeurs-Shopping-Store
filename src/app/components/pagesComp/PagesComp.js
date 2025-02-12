import Link from "next/link"

export default function PagesComp(props) {
  return (
    <div>
        <div className=' h-[35vh] w-full borde text-center items-center py-11'>
        <p className='text-5xl font-light'>{props.title}</p>
            <div className='flex items-center justify-center gap-2 mt-4'>
                <p className='[&>*]:ml-2 tracking-widest text-lightDark text-sm'><Link href={"/"}> <span className='hover:text-lightBlue cursor-pointer mr-1'>Home</span></Link>&gt;</p>
                <p>{props.name}</p>
             </div>
        </div>
    </div>
  )
}

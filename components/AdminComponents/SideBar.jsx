import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Link href={"/"}>
            
             <Image src={assets.logo} alt='' width={120}></Image>
            </Link>
           
        </div>
        <div className='w-28 sm:w-80 h-[120vh] relative py-12 border border-black'>

            <div className='w-[50%] sm:w-[80%] absolute right-0'>

            <Link href="/admin/addProduct" className='flex items-center border border-black gap-3 font-medium px--3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.add_icon} alt='' width={28}></Image><p>Add blogs</p>
            </Link>
            
            <Link href="/admin/blogList" className='flex items-center mt-5 border border-black gap-3 font-medium px--3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.blog_icon} alt='' width={28}></Image><p>Blog List </p>
            </Link>

            <Link href="/admin/subscriptions" className='flex items-center mt-5 border border-black gap-3 font-medium px--3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.email_icon} alt='' width={28}></Image><p>Subscriptions</p>
            </Link>

            </div>

        </div>
    </div>
  )
}

export default SideBar
import Image from 'next/image'
import React from 'react'
import { assets } from '@/Assets/assets'
const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {

    const BlogDate = new Date(date);


  return (
    <tr className='bg-white border-b'>
        <th className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900  whitespace-nowrap' scope='row'>
            <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon}/>
            <p >{author?author:"No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            X
        </td>

    </tr>
  )
}

export default BlogTableItem
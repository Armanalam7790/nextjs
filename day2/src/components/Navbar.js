import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-6 bg-amber-100 p-5 text-black font-bold capitalize rounded '>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/contect'}>contect</Link>
        <Link href={'/product'}>product</Link>

    </div>
  )
}

export default Navbar
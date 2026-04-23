'use client'
import React, { useState } from 'react'

const Home = () => {
const [count, setCount]  =  useState(0)

  return (
    <div className='flex items-center justify-center h-screen'>
       
        <h1 className='text-red-500 capitalize text-7xl'>home page</h1>
    </div>
  )
}

export default Home
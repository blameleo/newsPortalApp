import React, { useEffect, useState } from 'react'
import { MdOutlineBookmarkAdd,MdOutlineSearch  } from "react-icons/md";
import Button from './Button';
import { BsSend } from "react-icons/bs";



const Navbar = () => {

  return (
    <nav className='flex justify-between items-center py-3 border-b-4 border-black'>
      <h1 className='font-bold text-xl'>News Portal</h1>

      <ul className='flex  w-2/6 justify-between items-center'>
        <MdOutlineBookmarkAdd className='text-3xl'/>
        <MdOutlineSearch className='text-3xl'/>
        <BsSend className='text-3xl'/>
       <Button name="SIGN IN" style="font-bold"/>
       <Button name="SIGN UP" style="bg-blue-600 py-2 border-2 border-black px-8 font-bold" />

      </ul>
    </nav>
  )
}

export default Navbar

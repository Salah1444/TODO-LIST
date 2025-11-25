import React from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';

function Header() {
  return (
    <div className='header sticky-top opacity-50'>
      <nav className='navbar bg-dark p-3 '>
         <FaHome color={'white'} size={45}/>
         <FaPlus color={'white'} size={40}/>
          
      </nav>
      <hr />
    </div>
  )
}

export default Header

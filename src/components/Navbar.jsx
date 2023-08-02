import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Logo from '../img/Logo 1.png'
const Navbar = () => {
    const [Nav , setNav]=useState(false)

    const handleNav=() =>{
      setNav(!Nav)
    }
  return (
    <div className='text-white flex justify-between items-center h-20 max-w-auto mx-auto border-b-2 border-gray-600'>

        <img className='w-20'src={Logo} alt="Wrong..." />
        <h1 className='text-white w-full text-3xl font-bold pl-4'>TTSS</h1>
      
        <ul className='hidden md:flex  hover:'>
            <li className='p-4 hover:text-indigo-950 '> <Link to='/'> HOME</Link></li>
            <li className= ' p-4  hover:text-indigo-950'><Link to='/About'>ABOUT</Link></li>
            <li className='p-4  hover:text-indigo-950'><Link to='/Service'>SERVICE</Link></li>
            <li className='p-4  hover:text-indigo-950'><Link to='/Contect'>CONTACT</Link></li>
        </ul>
        
        
        <div onClick={handleNav} className='block md:hidden '>
            {!Nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
            
           
        </div> 
        <div className={!Nav ? ' fixed left-0 top-20 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'hidden left-[-100%]'} >
          
        <ul className='p-4'>
            <li className='p-4 border-b border-gray-600 hover:text-indigo-950'><Link onClick={handleNav} to='/'> HOME</Link></li>
            <li className='p-4 border-b  border-gray-600 hover:text-indigo-950'><Link onClick={handleNav}  to='/About'>ABOUT</Link></li>
            <li className='p-4 border-b  border-gray-600 hover:text-indigo-950'><Link onClick={handleNav}  to='/Service'>SERVICE</Link></li>
            <li className='p-4 hover:text-indigo-950 '><Link onClick={handleNav}  to='/Contect'>CONTACT</Link></li>
        </ul>
        </div>   
    </div>
  )
}

export default Navbar

import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="navbar bg-white">
      <ul className='flex justify-center gap-32 w-full'>
        <Link to={"/"} className='text-2xl text-black'>{
          path == "/" ? <IoHome /> : <IoHomeOutline />
        }</Link>
        <Link to={"/create-post"} className='text-2xl text-black'>{
          path == "/create-post" ? <FaPlus /> : < AiOutlinePlus />
        }</Link>
        <Link to={"/search"} className='text-2xl text-black'>{
          path == "/search" ? <FaSearch /> : <CiSearch />
        }</Link>
        <Link to={"/profile"} className='text-2xl text-black'>{
          path == "/profile" ? <FaUserCircle /> : <FaRegUserCircle />
        }</Link>
      </ul>
    </div>
  )
}

export default Navbar

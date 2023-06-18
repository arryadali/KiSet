import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id='navbar'>
      <div className='container'>
        <nav className='flex'>
          <div className='bg-cover pl-[10%] pt-5 pb-5'>
            <img src="../asset/logo.png" alt="" className=""/>
          </div>

          <ul className='flex gap-14 ml-auto pr-[7%] pt-10 font-bold text-[1.25rem]'>
            <li className='hover:text-[#010C80]'>
              <Link to={"/"}>Home</Link>
            </li>
            <li className='hover:text-[#010C80]'>
              <Link to={"/about"}>About</Link>
            </li>
            <li className='hover:text-[#010C80]'>
              <Link to={"/artikel"}>Tulis Artikel</Link>
            </li>
          </ul>

          <button className="bg-[#010C80] rounded-[5px] w-[5%] h-[40px] my-auto mr-[10%]">
            <Link to={"/login"}><p className="text-white font-semibold">Login</p></Link>
          </button>
        </nav>
      </div>
    </section>
  )
}

export default Navbar;


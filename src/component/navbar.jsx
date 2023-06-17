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

          <ul className='flex gap-14 ml-auto pr-[10%] pt-10 font-bold text-[1.25rem]'>
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
        </nav>
      </div>
    </section>
  )
}

export default Navbar;


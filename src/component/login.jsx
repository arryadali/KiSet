import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <div className='flex w-full mt-[5%]'>
        <div className='w-[50%]'>
            <div className='ml-[20%]'>
                <div className='uppercase text-[40px] text-left'>
                    <p>jadilah bagian dari <pre className='font-bold text-[#010C80]'>KiSet!</pre></p>
                </div>
                <div>
                    <p className='text-[20px] mb-[5%] text-[#666879]'>Apa Keuntungan yang Anda dapat?</p>
                    <hr className='w-[92%]'/>
                    <article className='text-[#B6B6B6] mt-[5%]'>
                        Dengan bergabung di KiSet, Anda secara eksklusif akan mendapatkan informasi terbaru dari kami. Anda juga dapat berbagi pengalaman lewat tulisan yang akan ditayangkan di website KiSet, agar bisa menginspirasi banyak orang.
                    </article>
                </div>
            </div>
        </div>
        <div className='w-[50%]'>
            <div>
                <label className='block uppercase font-semibold text-[#666879]'>Alamat Email</label>
                <input 
                type="text"
                className='border-2 w-[60%] h-[40px] rounded-[5px] mt-[2%] p-3'               
                />
            </div>
            <div>
                <label className='block uppercase font-semibold text-[#666879] mt-[3%]'>Kata sandi</label>
                <input 
                type="text"
                className='border-2 w-[60%] h-[40px] rounded-[5px] mt-[2%] p-3'               
                />
            </div>
            <button className='bg-[#010C80] mt-[5%]'>
                <p className='uppercase font-bold bg-[#010C80] w-[460px] h-[55px] text-white pt-[3%]'>LOGIN</p>
            </button>
            <Link to={"/register"}>
            <div>
                <p className='ml-[22%] mt-[5%] text-[#6974F1] hover:text-[#4454FF]'>Belum punya akun?</p>
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;

import React from "react";

const Artikel = () => {
    return (
        <div className="container">
            <div className=" md:w-[83%] m-auto mt-[4rem]">
                <p className="font-medium text-[32px] text-[#373737]">
                    Tulis Artikel
                </p>
                <hr className="mt-[24px]"/>

                <div>
                    <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">judul</label>
                    <input type="text" className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                </div>
                <div>
                    <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">unggah foto</label>
                    <input type="text" className="block border-2 rounded-[10px] w-[365px] h-[188px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                </div>
                <div>
                    <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">deskripsi</label>
                    <input type="text" className="block border-2 rounded-[10px] w-full h-[302px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                </div>
                <button className="uppercase font-medium text-[20px] rounded-full bg-[#010C80] w-[174px] h-[62px] text-white mt-10">
                    submit
                </button>
            </div>
        </div>
    )
}

export default Artikel;
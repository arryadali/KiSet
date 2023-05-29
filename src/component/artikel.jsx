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
                    <label className="font-medium text-[20px] text-[#373737] mt-[54px]">JUDUL</label>
                    <input type="text" className="block border-2 "/>
                </div>
            </div>
        </div>
    )
}

export default Artikel;
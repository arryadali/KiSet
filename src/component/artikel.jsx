import axios from "axios";
import { useState } from "react";


const Artikel = () => {
    const [input, setInput] = useState({
        judul : "",
        foto : "",
        deskripsi : "",
        cegah : "",
        obat : "",
      });


    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        if (name === "name") {
          setInput({ ...input, name: value });
        } else if (name === "judul") {
          setInput({ ...input, judul: value });
        } else if (name === "foto") {
          setInput({ ...input, foto: value });
        } else if (name === "deskripsi") {
          setInput({ ...input, deskripsi: value });
        } else if (name === "cegah") {
            setInput({ ...input, cegah: value});
        } else if (name === "obat") {
            setInput({ ...input, obat:value});
        }
      };

    
    // Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
            const response = await axios
            .post("https://wild-pleat-crow.cyclic.app/api/article", {
                judul: input.judul,
                deskripsi: input.deskripsi,
                foto: input.foto,
                cegah: input.cegah,
                obat: input.obat,
            })

            console.log(response.data)
    }

    return (
        <div className="container">
            <div className=" md:w-[83%] m-auto mt-[4rem] mb-[4%]">
                <p className="font-medium text-[32px] text-[#373737]">
                    Tulis Artikel
                </p>
                <hr className="mt-[24px]"/>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">judul</label>
                        <input 
                        type="text"
                        name="judul"
                        value={input.judul}
                        onChange={handleChange}
                        className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                        
                    </div>
                    <div>
                        <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">unggah URL foto</label>
                        <input 
                        type="text"
                        name="foto"
                        value={input.foto} 
                        onChange={handleChange}
                        className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                    </div>
                    <div>
                        <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">deskripsi</label>
                        <input 
                        type="text"
                        name="deskripsi" 
                        value={input.description}
                        onChange={handleChange}
                        className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                    </div>
                    <div>
                        <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">Cara mencegah</label>
                        <input 
                        type="text"
                        name="cegah" 
                        value={input.cegah}
                        onChange={handleChange}
                        className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                    </div>
                    <div>
                        <label className="block font-medium text-[20px] text-[#373737] mt-[54px] uppercase">Cara mengobati</label>
                        <input 
                        type="text"
                        name="obat" 
                        value={input.obat}
                        onChange={handleChange}
                        className="block border-2 rounded-[10px] w-full h-[62px] mt-3 mb-2 px-3 pb-1 focus:outline-[##010C80]"/>
                    </div>
                    <button 
                    type="submit"
                    className="uppercase font-medium text-[20px] rounded-[5px] bg-[#010C80] w-[150px] h-[55px] text-white mt-10">
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Artikel;
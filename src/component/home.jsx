import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get("https://ba06-182-253-194-51.ngrok-free.app/api/article")
        .then((res) => {
            let hasil = res.data.getArticle;
            setData(hasil);
            console.log(hasil);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return(
    <div className="container">

        <section id="hero">
            <div>
                <img src="../asset/dokter.jpg" alt="" className="w-[100%] h-[503px] mb-[15%] md:mb-[10%] lg:mb-[7%] xl:mb-[5%]"/>

                <div className="relative">
                    <div className="absolute bottom-0 w-[100%] text-center font-bold py-[136px] mb-[4%]">
                        <div className="text-[40px]">
                            SELAMAT DATANG DI KISET, KISPERS !
                        </div>
                        <div className="text-[24px] text-white font-bold">
                            Solusi dari berbagai penyakit <pre>Cari dan temukan solusinya!</pre>
                        </div>
                        <div className="pt-12">
                            <input type="text" className="rounded-[30px] w-[40%] h-[54px] px-6 focus:outline-white"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section id="card">
                <div className="container w-[83%] m-auto h-[179px]">
                    {data !== null &&
                        data.map((element) => (
                        <div key={element.id} className="shadow-2xl mb-[15%] md:mb-[10%] lg:mb-[7%] xl:mb-[5%] md:flex">
                            <div>
                                <img
                                    src={element.foto}
                                    alt={element.foto}
                                    className="h-[179px] w-[1000px] md:w-[240px]"
                                />
                            </div>

                            <div className="w-[560px] justify-center ml-[1%] md:ml-[2rem] mt-[27px] h-[124px]">
                                <p className="font-medium text-[20px]">
                                    {element.title}
                                </p>
                                <article className="text-[#B6B6B6] text-[14px] mt-[10px] text-justify overflow-hidden w-[45%] h-[55%] md:w-[100%] md:h-[70%]">
                                    {element.description}
                                </article>
                            </div>
                        </div>
                        ))}
                </div>
        </section>

    </div>
    )
}

export default Home;
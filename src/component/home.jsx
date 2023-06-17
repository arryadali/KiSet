import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false)

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
    }, [data])

    const handleDelete = async (id) => {
        try {
            setLoading(true)
            await axios.delete(
            `localhost:5000/api/article/${id}`
          )
          setLoading(false)

        } catch (error) {
            console.log(error)
        }
          
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    
        const results = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      };
    
    const articlesToDisplay = searchTerm ? searchResults : data;
    
  return (
    <div>
        <section id="Home">
            <div className="bg-banner h-1/2 w-full">
                <div className="bottom-0 w-[100%] text-center font-bold py-[136px] mb-[4%] ">
                    <div className="text-[40px]">
                        SELAMAT DATANG DI KISET, KISPERS !
                    </div>
                    <div className="text-[24px] text-white font-bold">
                        Solusi dari berbagai penyakit <pre>Cari dan temukan solusinya!</pre>
                    </div>
                    <div className="pt-12">
                        <input 
                        type="text"
                        placeholder="Search Box"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="rounded-[30px] w-[40%] h-[54px] px-6 focus:outline-white text-center"/>
                        
                    </div>
                </div>
            </div>
        </section>

        <section id="Card">
                <div className="container">
                    <div className="w-[83%] m-auto h-[179px]">
                        {articlesToDisplay !== null &&
                            articlesToDisplay.map((element)=> (
                                <div key={element.id} className="shadow-2xl mb-[15%] md:mb-[10%] lg:mb-[7%] xl:mb-[5%] md:flex">
                                        <div>
                                            <img
                                                src={element.foto}
                                                alt={element.foto}
                                                className="h-[179px] w-[1000px] md:w-[240px]"
                                            />
                                        </div>

                                        <Link to={`/artikel/${element._id}`}>
                                        <div className="w-[560px] justify-center ml-[1%] md:ml-[2rem] mt-[27px] h-[124px]">
                                            <p className="font-medium text-[20px]">
                                                {element.title}
                                            </p>
                                            <article className="text-[#B6B6B6] text-[14px] mt-[10px] text-justify  overflow-hidden w-[45%] h-[55%] md:w-[100%] md:h-[70%]">
                                                {element.description}
                                            </article>
                                        </div>
                                        </Link>
                                        
                                        <button
                                            onClick={() => handleDelete(element._id)}
                                            value={element._id}
                                            className="bg-red-500 ml-[10.125rem] rounded-full h-[37px] w-20 font-semibold mt-auto mb-auto"
                                        >
                                            {loading ? "Loading ..." : "Delete"}
                                        </button>
                                    </div>
                            ))}
                            
                    </div>
                </div>
        </section>
        
    </div>
    
  )
}

export default Home;
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Detailartikel = () => {
    let location = useLocation();
    const id = location.pathname.split("/")[2]
    const [detailArtikel, setDetailArtikel] = useState({})

    useEffect(()=> {
        axios.get(`localhost:5000/api/article/${id}`)
        .then((res) => {
            let hasil = res.data;
            setDetailArtikel(hasil);
            console.log(hasil);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [id])

  return (
    <div className='container'>
        <div>
            <img src={detailArtikel?.foto} alt="" className='w-[80%] mx-auto h-[529px]'/>
        </div>
        <div className='bg-green-600 w-[80%] mx-auto pt-[4%]'>
            <p className='font-medium text-[36px]'>Halo Kispers, Ketahui cara mengatasi {detailArtikel?.title}!</p>


        </div>
    </div>
  )
}

export default Detailartikel;

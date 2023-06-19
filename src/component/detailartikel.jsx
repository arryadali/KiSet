import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Detailartikel = () => {
    let location = useLocation();
    const id = location.pathname.split("/")[2]
    const [detailArtikel, setDetailArtikel] = useState({})

    useEffect(()=> {
        axios.get(`https://wild-pleat-crow.cyclic.app/api/article/${id}`)
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
        <div className='w-[80%] mx-auto pt-[4%]'>
            <div>
                <p className='font-medium text-[36px]'>Halo Kispers, Ketahui cara mengatasi {detailArtikel?.title}!</p>
            </div>
            <div className='pt-[18px] '>
                <article className='text-justify text-[14px]'>{detailArtikel?.description}</article>
            </div>
            <div className='pt-[18px] '>
                <p className='font-medium text-[36px]'>Cara mencegah {detailArtikel?.title}!</p>
            </div>
            <div className='pt-[18px] '>
                <article className='text-justify text-[14px]'>{detailArtikel?.cegah}</article>
            </div>
            <div className='pt-[18px] '>
                <p className='font-medium text-[36px]'>Cara mengobati {detailArtikel?.title}!</p>
            </div>
            <div className='pt-[18px] '>
                <article className='text-justify text-[14px]'>{detailArtikel?.obat}</article>
            </div>
        </div>
    </div>
  )
}

export default Detailartikel;

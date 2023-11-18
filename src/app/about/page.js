'use client';
import React, { useEffect, useState } from 'react';
import Menu from '../../../components/Menu';

const page = ({searchParams}) => {
    let [data, setData] = useState([])
    useEffect(()=>{
        (async()=>{
            let response = await fetch('https://restcountries.com/v3.1/all');
            let json = await response.json();
            setData(json)
        })()
    },[])
  return (
    <div>
        <Menu />
        <h1>{searchParams.name}</h1>
        <h2>{searchParams.price}</h2>
        
        {
            data.map((item, index) => {
                return (
                    <div key = {index}>
                        <h1>{item.name.common}</h1>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default page
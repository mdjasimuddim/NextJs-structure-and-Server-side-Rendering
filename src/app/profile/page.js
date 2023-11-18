import React from 'react'
import Menu from '../../../components/Menu';
async function getData(){
    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = response.json();
    return data;
}

const page = async() => {
    let data = await getData();
  return (
    <div>
        <Menu />
        {
            data.map((item, index) => {
                return(
                    <div key = {index}>
                        <h3>{item.name.common}</h3>
                        <p> population = {item.population}</p>
                        <img src = {item.flags.png} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default page
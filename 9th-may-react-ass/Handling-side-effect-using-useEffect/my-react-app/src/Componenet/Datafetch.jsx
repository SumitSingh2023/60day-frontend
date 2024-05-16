import React from "react";
import { useState,useEffect } from "react";

function FetchData() {
    let [data, setData] = useState([])

    async function fetchData() {
        let product = await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        let res = await product.json()
        setData(res)
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    
    
    return (
        <div>
            {data.map((ele)=>(
                <div>
                    <img src={ele.flags.png} alt={ele.flags.alt}/>
                    <p>Country:{ele.name.official}</p>
                </div>
            ))}
           <button onClick={fetchData}>submit</button>
        </div>
    )
}

export { FetchData }
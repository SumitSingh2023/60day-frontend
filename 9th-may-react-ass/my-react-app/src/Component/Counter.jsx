import React from "react";
import { useState } from "react";

function Counter(){
    const [count , setCount] = useState(0)

    function handleCount(){
        setCount(count+1)
    }

    function handlereset(){
        setCount(0)
    }
    return(
        <div>
            <h2>Counter:{count}</h2>
            <button onClick={handleCount}>Click</button>
            <button onClick={handlereset}>Reset</button>
        </div>
    )
}

export {Counter}
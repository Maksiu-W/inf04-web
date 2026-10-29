import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count + 1)
    }

    return(
        <>
            <p>{count}</p>
            <button onClick={addOne}>+1</button>
        </>
    )
}
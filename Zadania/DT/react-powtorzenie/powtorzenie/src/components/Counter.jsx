import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count + 1)
    }

    function addThree(){
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)

        //lub po prostu setCount(count + 3)
    }

    return(
        <>
            <p>{count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </>
    )
}
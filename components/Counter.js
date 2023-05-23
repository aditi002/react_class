'use client'
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const handleClick1 = () => {
        setCount(count + 1)
        // count += 1
    }

    return(
      

        <div>
            <p>{count}</p>
            <button onClick={handleClick1}>good</button>
            <button >neutral</button>
            <button >bad</button>
        </div>



        
    )
}
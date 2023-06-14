'use client'

export default function Counter(props){
    const {count, handleClick} = props

    // const handleClick = () => {
    //     setCount(count + 1)
        // count += 1

    return(
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>plus</button>
        </div>
    )
}
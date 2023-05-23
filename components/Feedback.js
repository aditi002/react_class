import { useState } from "react"

const Statistics =(props) =>{
    const {good, neutral, bad}= props

    const total = good + neutral + bad
    const average = (good+neutral) / total

    return(
        <>
        <h2>Statistics</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: </p>
        <p>average: </p>
        </>

        
    )

}

//buttons
const Buttons = (props) => {
    return(
        <button onclick={props.handleClick}>{props.text}</button>
    )
}


export default function Feedback(){
    // const [good, setGood] = useState(0)
    // const [neutral,setNeutral]=useState(0)
    // const [bad, setBad] =useState(0)
    const [feedback, setFeedback] = useState(
        {good: 0, neutral : 0, bad: 0}
    )
    const handleGood =() => setGood(good + 1)
    const handleNeutral =() => setNeutral(neutral + 1)
    const handleBad =() => setBad(bad + 1)


    
    return(
        <>
        <h2>give feedback</h2>
        <Button handleClick={handleGood} text ="good"/>
        <button onClick={handleNeutral} text ="neutral"/>
        <button onClick={handleBad} text = "bad"/>

        
        <Statistics
        good = {good}
        neutral={neutral}
        bad ={bad}
        />

        </>

    )
    
}
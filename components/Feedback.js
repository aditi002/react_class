'use client'
import { useState } from "react"

const Statistics = (props) => {
    // console.log(props)
    const{ good, neutral, bad, history}= props

    const total = good + neutral + bad
    const average = (good + neutral)/total

    return(
        <>
        <h2>statistics</h2>
        <p>good: {good}</p>
        <p>neutral:{neutral}</p>
        <p>bad:{bad}</p>
        <p>all:{total}</p>
        <p>average:{average}</p>
        {history}
        </>
    )
}

//button element

const Button = (props) =>{
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}



export default function Feedback(){
    // const [good , setGood] = useState(0)
    // const [neutral, setNeutral] = useState(0)
    // const [bad, setBad] = useState(0)

    const [feedback, setFeedback] = useState(
        { good:0, neutral:0, bad:0 } 
    )


    const [history, setHistory] = useState([
        // history.good = ["0"]
    ])

    // const handleGood = () => setGood(good+1)
    // const handleNeutral = () => setNeutral(neutral+1)
    // const handleBad = () => setBad(bad + 1)


    
            // const handleGood = ()=>{
            //     setFeedback({
            //         good: feedback.good + 1,
            //         neutral: feedback.neutral,
            //         bad: feedback.bad
        
            //     })
            // }
        
            //instead of this below one

    const handleGood = ()=>{
        setFeedback({
            ...feedback,
            good:feedback.good + 1
        })
        setHistory(history.concat('G')) //push le existing ma item add garx but concat le array ma G lai connect garx naya banaux concat le , yesko written type array ho
    }


    const handleNeutral = ()=>{
        setFeedback({
            ...feedback,
            neutral: feedback.neutral + 1,
        })
    }

    const handleBad = ()=>{
        setFeedback({
            ...feedback,
            bad: feedback.bad + 1
        })
    }

   
    
    return(
        <>
        <h2>Give Feedback</h2>
        <Button handleClick={handleGood} text="good"/>
        {/* <button onClick={handleGood}>good</button> */}
        <Button handleClick={handleNeutral} text="neutral"/>
        <Button handleClick={handleBad} text="bad"/>

        <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            history={history}
        />

       
        </>
    )
}
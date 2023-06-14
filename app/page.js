'use client'
import NavBar from "@/components/Navbar"
import Notes from "@/components/Notes"


export default function Home() {
  // const [count, setCount] = useState(0)
  // const handleClick = () => setCount(count + 1)

  return (

    <div>
    <NavBar/>
    <Notes/>
    </div>
    // <div>

    //   {/* <Feedback/> */}
    //    <Counter count={count} handleClick={handleClick}/>
    //    <Counter count={count} handleClick={handleClick}/>
    // </div>

  )
}
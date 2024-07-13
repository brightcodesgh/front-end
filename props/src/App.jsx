import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


const title = "Seatle Community Gym";
const subTitle = `${title}.\n\nHere we have all the equipments to help you workout`
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>{title}</h1>
      <h3 className=''>{subTitle}</h3>
      <Card username ="Brightd" title = "Software Engineer"/>
    </>
    
  )
}

export default App

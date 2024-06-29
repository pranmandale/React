import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import Header from './components/Header'
import './App.css'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
         {/* <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
         <Card username = "Pranav" post="data engineer" salary="20909090"/>  
         <Card username = 'john' post = 'junior engineer' salary="233232"/>
         <Card />  
         <Card/>   */}
          <Header/>
        
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Projects from './component/Projects'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card1 from './components/card1'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Card4 from './components/card4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <Header />
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    </div>
    </>
  )
}

export default App

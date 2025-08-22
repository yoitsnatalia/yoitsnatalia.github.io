import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GemsPage from './pages/GemsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-screen h-screen">
      <div className="w-full px-20">
        <header className="header">
            <h1 className="mr-10">Natalia Linn</h1>
            <h2 className="italic">Software Engineer & Creative</h2>
        </header>
        
        {/* <GemsPage /> */}
        
        <HomePage />
      </div>
    </div>
  )
}

export default App

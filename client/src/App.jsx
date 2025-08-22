import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GemsPage from './pages/GemsPage'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="flex w-screen h-screen">
      <div className="w-full px-20">
        <header className="header">
            <h1 className="mr-10">Natalia Linn</h1>
            <h2 className="italic">Software Engineer & Creative</h2>
        </header>
        
        { page === 'gems' && <GemsPage setPage={setPage}/> }
        
        { page === 'home' && <HomePage setPage={setPage}/> }
      </div>
    </div>
  )
}

export default App

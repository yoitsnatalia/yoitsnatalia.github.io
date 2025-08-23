import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GemsPage from './pages/GemsPage'
import MenuPage from './pages/MenuPage'

function App() {
  const [page, setPage] = useState('home');
  const [filter, setFilter] = useState('all');

  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full md:px-20">
        <header className="header px-7 md:px-0">
          <div className="flex flex-col sm:flex-row items-baseline">
            <h1 className="mr-10 cursor-pointer" onClick={() => setPage('home')}>Natalia Linn</h1>
            <h2 className="italic">Software Engineer & Creative</h2>
          </div>
          <div className="md:hidden">
            { page === 'home' && <button className="back" onClick={() => setPage('menu')}>Menu</button>}
            { page === 'menu' && <button className="back" onClick={() => setPage('home')}>Back</button>}
          </div>
        </header>

        { page === 'menu' && <MenuPage setPage={setPage} setFilter={setFilter}/> }
        
        { page === 'gems' && <GemsPage setPage={setPage}/> }
        
        { page === 'home' && <HomePage setPage={setPage} filter={filter} setFilter={setFilter}/> }
      </div>
    </div>
  )
}

export default App

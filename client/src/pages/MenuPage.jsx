export default function MenuPage({setPage, setFilter}) {
    return (
      <div className="fixed mt-30 overflow-y-scroll inset-0 z-50 flex flex-col items-center justify-center text-black">
        <div className="flex flex-col space-y-6 py-10 text-center">
          <button className="menu" onClick={() => {setPage('home'); setFilter('all')}}>/all projects/</button>
          <button className="menu" onClick={() => {setPage('home'); setFilter('fullstack')}}>full stack</button>
          <button className="menu" onClick={() => {setPage('home'); setFilter('hardware')}}>hardware</button>
          <button className="menu" onClick={() => {setPage('home'); setFilter('gamedev')}}>game dev</button>
          <button className="menu" onClick={() => {setPage('home'); setFilter('design')}}>design</button>
  
          <h3 className="text-gray-400">::</h3>
  
          <button className="menu">resume</button>
          <button className="menu">linkedin</button>
          <button className="menu">github</button>
        </div>
      </div>
    )
  }
  